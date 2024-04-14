import React from "react"

interface CustomButtonProps{
    type : string,
    value : string,
    onClick : React.MouseEventHandler<HTMLButtonElement> | null,
    styleComponent : React.ComponentType<any>
}

function CustomButton({type, value, styleComponent, onClick} : CustomButtonProps){
    const StyleButton = styleComponent

    return(
        <StyleButton type={type} value={value} onClick={onClick}/>
    )
}

export default CustomButton