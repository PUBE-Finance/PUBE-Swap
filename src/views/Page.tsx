import React from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import bg from "../assets/images/swap_bg.webp"
import SubNav from '../components/Menu/SubNav'
import Footer from '../components/Menu/Footer'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: alc(100vh - 64px);
  background-color: #fff;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 64px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <StyledPage {...props}>
      <SubNav />
      {children}
      <Flex flexGrow={1} />
      <Footer />
    </StyledPage>
  )
}

export default Page
