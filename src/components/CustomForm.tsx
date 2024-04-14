import React from "react"
import styled from "styled-components"

const Form = styled.form`
    width : 90%;
    display : flex;
    justify-content : center;
    align-items : center;
    border : 4px solid #4287f5;
    border-radius : 20px;
    margin : 1em 4em;
    gap : 1em;
    z-index : 0;
    background-color : white;
`
interface CustomFormsProps{
    onSubmit(e : React.FormEvent<HTMLFormElement>) : void,
    children : React.ReactNode,
}

function CustomForms({onSubmit, children} : CustomFormsProps){

    return(
        <Form onSubmit={onSubmit}>{children}</Form>
    )
}

export default React.memo(CustomForms)