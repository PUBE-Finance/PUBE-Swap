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

const GradientButton = styled(StyledButton)`
  font-family: Mont, sans-serif;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;

  background: linear-gradient(-45deg, #d3e3bf,#eaa083,#bb818f,#4356a8);
  background-size: 400% 400%;

  -webkit-animation: ${gradientKeyframes} 10s ease infinite;
  -moz-animation: ${gradientKeyframes} 10s ease infinite;
  animation: ${gradientKeyframes} 10s ease infinite;

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