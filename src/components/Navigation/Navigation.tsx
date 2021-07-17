import React from 'react'

import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth'

import { MENU_HEIGHT } from './config'
import UserBlock from './UserBlock'
import Logo from './Logo'
import useTheme from '../../hooks/useTheme'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
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

const Inner = styled.div`
  flex-grow: 1;
  margin-top: ${MENU_HEIGHT}px;
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

  return (
    <Wrapper>
      <StyledNav>
        <Logo isDark={isDark} />
        {!!login && !!logout && (
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
          </Flex>
        )}
      </StyledNav>
      <BodyWrapper>
        <Inner>{children}</Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Navigation
