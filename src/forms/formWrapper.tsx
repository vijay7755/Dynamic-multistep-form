import React, { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

const titleStyle: any = {
    textAlign: "center",
    margin: 0,
    marginBottom: "1rem"
}

const FormWrapper = ({title, children}: FormWrapperProps) => {

    return (
        <>
            <h2 style={titleStyle}>{title}</h2>
            <div>
                {children}
            </div>
        </>
    )
}

export default FormWrapper