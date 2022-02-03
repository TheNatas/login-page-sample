import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";

type InputGroupProps = {
  title: string,
  type: string,
  changeHandler: (e: any) => void,
  value: string
};

const InputGroup = ({ title, type, changeHandler, value }: InputGroupProps) => {
  return(
    <>
      <FormLabel>{title}</FormLabel>
      <FormControl type={type} placeholder={title} 
        onChange={changeHandler}
        value={value}/>
    </>
  )
};

export default InputGroup;