import { ChangeEventHandler } from "react"
import styled from "styled-components";

interface CustomIptProps {
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

function CustomIpt({ placeholder, value, onChange }: CustomIptProps) {
    return (
        <Input type="text" placeholder={placeholder} value={value} onChange={onChange} required />
    )
}

export default CustomIpt


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