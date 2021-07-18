import styled from "styled-components";


const StyledButton = styled.button`
  border: none;
  font-size: 15px;

  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  padding: 0.5rem 1rem;

  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000;

  display: flex;
  align-items: center;

  :hover {
    filter: brightness(1.1);
  }
`

export default StyledButton