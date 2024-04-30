import React from "react"

interface CustomBtnProps {
    type: string,
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | null,
    styleComponent: React.ComponentType<any>
}

function CustomBtn({ type, text, styleComponent, onClick }: CustomBtnProps) {
    const StyleButton = styleComponent

    return (
        <StyleButton type={type} onClick={onClick} >{text}</StyleButton>
    )
}

export default CustomBtn