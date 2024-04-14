import React from "react"

interface CustomBtnProps {
    type: string,
    value: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | null,
    styleComponent: React.ComponentType<any>
}

function CustomBtn({ type, value, styleComponent, onClick }: CustomBtnProps) {
    const StyleButton = styleComponent

    return (
        <StyleButton type={type} value={value} onClick={onClick} />
    )
}

export default CustomBtn