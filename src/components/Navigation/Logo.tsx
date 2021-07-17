import React from 'react'
import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import logo from '../../assets/images/logo.webp'
import { MENU_HEIGHT } from './config'

interface Props {
  isDark: boolean
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`

const LogoImage = styled.img`
  background: -webkit-linear-gradient(#756e99, #bf8a86, #d0bb97);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LogoText = styled.h2`
  margin-left: 0.2em;
  font-size: 2em;
  font-family: Mont, sans-serif;
  margin-top: 0.2em;
  color: #ffffff;
  background: -webkit-linear-gradient(#756e99, #bf8a86, #d0bb97);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Logo: React.FC<Props> = ({ isDark }) => {
  return (
    <Flex>
      <LogoWrapper>
        <LogoImage alt="" src={logo} height={MENU_HEIGHT * 0.6} width={MENU_HEIGHT * 0.6} />
        <LogoText>PUBESWAP</LogoText>
      </LogoWrapper>
    </Flex>
  )
}

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
