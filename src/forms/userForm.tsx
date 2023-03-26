import React from "react"
import { formFields } from "../common/styles"
import FormWrapper from "./formWrapper"


type UserData = {
    firstName: string
    lastName: string
    age: string
}

type UserFormProps = UserData & {
    updateFields: (fileds: Partial<UserFormProps>) => void
}

export const UserForm = ({ firstName, lastName, age, updateFields }: UserFormProps) => {

    return (
        <FormWrapper title="User">
            <div style={formFields}>
                <label>First Name</label>
                <input
                    autoFocus
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => updateFields({ firstName: e.target.value })}
                />
                <label>Last Name</label>
                <input
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => updateFields({ lastName: e.target.value })}
                />
                <label>Age</label>
                <input
                    required
                    min={1}
                    // type="number" 
                    value={age}
                    onChange={(e) => updateFields({ age: e.target.value })}
                />
            </div>
        </FormWrapper>
    )
}

export default UserForm