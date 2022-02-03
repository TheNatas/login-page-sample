import { Link } from "react-router-dom"
import styled from "styled-components";

const Back = styled.img`
  position: fixed;
  left: 0vw;
  top: 0vh;
`;

const BtnBack = () => {
  return(
    <Link to="/login">
      <Back src="/back.png" alt="Voltar para página de login" width="64"/>
    </Link>
  )
};

export default BtnBack;