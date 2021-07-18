import styled, {keyframes} from "styled-components";
import StyledButton from "./StyledButton";

const gradientKeyframes = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

const glowKeyframes = keyframes`
  from {
    text-shadow: 0 0 20px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`

const GradientButton = styled(StyledButton)`
  font-family: Mont, sans-serif;
  color: white;

  background: linear-gradient(-45deg, #756e99, #bf8a86, #d0bb97);
  background-size: 400% 400%;

  -webkit-animation: ${gradientKeyframes} 20s ease infinite, ${glowKeyframes} 3s ease-in-out infinite alternate;
  -moz-animation: ${gradientKeyframes} 20s ease infinite, ${glowKeyframes} 3s ease-in-out infinite alternate;
  animation: ${gradientKeyframes} 20s ease infinite, ${glowKeyframes} 3s ease-in-out infinite alternate;

  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  :hover {
    color: white;
    filter: brightness(1.1);
  }

  :focus-within {
    color: white;
  }
`

export default GradientButton