import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import { Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import throttle from 'lodash/throttle'
import useAuth from '../../hooks/useAuth'

import { MENU_HEIGHT } from './config'
import UserBlock from './UserBlock'
import Logo from './Logo'
import useTheme from '../../hooks/useTheme'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`

const Inner = styled.div<{ showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  justify-content: center;
  align-items: center;
`

const Navigation: React.FC = ({ children }) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()

  const { isDark, toggleTheme } = useTheme()
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [showMenu, setShowMenu] = useState(true)
  const refPrevOffset = useRef(window.pageYOffset)

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true)
        } else {
          // Has scroll down
          setShowMenu(false)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo isDark={isDark} />
        {!!login && !!logout && (
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
          </Flex>
        )}
      </StyledNav>
      <BodyWrapper>
        <Inner showMenu={showMenu}>{children}</Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Navigation
