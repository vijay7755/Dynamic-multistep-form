import React from "react"
import { formFields } from "../common/styles"
import FormWrapper from "./formWrapper"


type AccountData = {
    email: string
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fileds: Partial<AccountFormProps>) => void
}

export const AccountForm = ({email, password, updateFields}: AccountFormProps) => {

    return (
        <FormWrapper title="Account">
            <div style={formFields}>
                <label>Email</label>
                <input 
                    value={email}
                    autoFocus 
                    required 
                    type="email"
                    onChange={(e) => updateFields({email: e.target.value})} 
                    />
                <label>Password</label>
                <input 
                    value={password}
                    required type="password" 
                    onChange={(e) => updateFields({password: e.target.value})}
                    />
            </div>
        </FormWrapper>
    )
}

export default AccountForm