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
`

const LogoImage = styled.img`
  background: -webkit-linear-gradient(#d3e3bf, #d3e3bf, #d3e3bf,#d3e3bf,#d3e3bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LogoText = styled.h2`
  margin-left: 0.25em;
  font-size: 1.8em;
  color: #ffffff;
  background: -webkit-linear-gradient(-60deg, #d3e3bf,#eaa083,#bb818f,#4356a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Mont, sans-serif;
  margin-top: 0.12em;
`

const Logo: React.FC<Props> = ({ isDark }) => {
  return (
    <Flex>
      <LogoWrapper>
        <LogoImage alt="" src={logo} height={MENU_HEIGHT * 0.5} width={MENU_HEIGHT * 0.5} />
        <LogoText>PUBESWAP</LogoText>
      </LogoWrapper>
    </Flex>
  )
}

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
