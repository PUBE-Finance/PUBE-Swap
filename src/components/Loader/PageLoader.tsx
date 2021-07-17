import React from 'react'
import styled from 'styled-components'
import Page from '../Layout/Page'
import Pulse from './Pulse'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Pulse />
    </Wrapper>
  )
}

export default PageLoader
