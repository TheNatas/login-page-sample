import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { changeForgotPassword, changeUserEmail } from "../redux/userSlice";
import InputGroup from "../components/InputGroup";


const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(changeUserEmail(login));
  }

  const handleForgot = () => {
    dispatch(changeForgotPassword(login));
  }
  
  return(
    <>  
      <Form>
        <InputGroup title="Login" type="text" 
          changeHandler={(e) => setLogin(e.target.value)} value={login}/>
        <InputGroup title="Senha" type="password" 
          changeHandler={(e) => setPassword(e.target.value)} value={password}/>
        <Button variant="primary" onClick={handleLogin} style={{display: 'block', margin: '.5rem auto'}}>Entrar</Button>
        <Link to='/esqueci_minha_senha'>
          <Button variant="secondary" onClick={handleForgot} style={{display: 'block', margin: '.5rem auto'}}>Esqueci minha senha</Button>
        </Link>
      </Form>
    </>
  )
}

export default Login;