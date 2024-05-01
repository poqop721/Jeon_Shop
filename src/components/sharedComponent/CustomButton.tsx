import React from "react"

interface CustomBtnProps {
    type: string,
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | null,
    styleComponent: React.ComponentType<any>,
    styleProps? : string | number | boolean,
}

function CustomBtn({ type, text, styleComponent, onClick, styleProps }: CustomBtnProps) {
    const StyleButton = styleComponent

    return (
        <StyleButton type={type} onClick={onClick} $styleProps={styleProps}>{text}</StyleButton>
    )
}

export default CustomBtn