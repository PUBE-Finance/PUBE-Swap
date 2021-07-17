import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../../assets/images/logo.webp'


const pulse = keyframes`
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
`

const PulsingLogo = styled.img`
  height: 5rem;
  transform: scale(1);
  animation: ${pulse} 1s infinite;
`

const Pulse: React.FC = () => {
  return (<PulsingLogo src={logo} />)
}

export default Pulse