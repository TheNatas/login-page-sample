import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/userSlice";
import InputGroup from "../components/InputGroup";
import BtnBack from "../components/BtnBack";

const ForgotPassword = () => {
  const [email, setEmail] = useState( useAppSelector(selectUser).email );

  return(
    <>
      <BtnBack/>
      <InputGroup title="Digite seu e-mail para entrarmos em contato" type="email" 
        changeHandler={(e) => setEmail(e.target.value)} value={email}/>
      <Button variant="secondary" onClick={() => ''} style={{margin: '.5rem 0'}}>Enviar</Button>
    </>
  )
};

export default ForgotPassword;