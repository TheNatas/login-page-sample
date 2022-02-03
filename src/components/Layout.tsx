import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return(
    <Container>
      {children}
    </Container>
  )
};

export default Layout;