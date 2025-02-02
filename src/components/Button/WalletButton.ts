import styled, {keyframes} from "styled-components";
import GradientButton from './GradientButton'


const glowKeyframes = keyframes`
  from {
    text-shadow: 0 0 20px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`

const WalletButton = styled(GradientButton)`
  -webkit-animation: ${glowKeyframes} 3s ease-in-out infinite alternate;
  -moz-animation: ${glowKeyframes} 3s ease-in-out infinite alternate;
  animation: ${glowKeyframes} 3s ease-in-out infinite alternate;

`

export default WalletButton