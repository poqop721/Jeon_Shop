import { ChangeEventHandler } from "react"
import styled from "styled-components";

interface CustomInputProps{
    placeholder : string;
    value : string;
    onChange : ChangeEventHandler<HTMLInputElement>
}

const Input = styled.input`
    flex : 1;
    width : 80%;
    height : 25px;
    padding : 0.5em 1em;
    border : 0px;
    border-radius : 20px;
    font-size : 1.2em;
    z-index : 0;
    &:focus{
        outline : none;
    }
`

function CustomInput({placeholder, value, onChange} : CustomInputProps){
    return(
        <Input type="text" placeholder={placeholder} value={value} onChange={onChange} required />
    )
}

export default CustomInput