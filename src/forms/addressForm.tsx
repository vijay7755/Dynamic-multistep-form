import React from "react"
import { formFields } from "../common/styles"
import FormWrapper from "./formWrapper"


type AddressData = {
    street: string
    city: string
    state: string
    pincode: string
}

type AddressFormProps = AddressData & {
    updateFields: (fileds: Partial<AddressFormProps>) => void
}


export const AddressForm = ({ street, city, state, pincode, updateFields }: AddressFormProps) => {

    return (
        <FormWrapper title="Adress">
            <div style={formFields}>
                <label>Street</label>
                <input
                    value={street}
                    autoFocus 
                    required 
                    type="text"
                    onChange={(e) => updateFields({street: e.target.value})} 
                    />
                <label>City</label>
                <input
                    value={city}
                    required 
                    type="text" 
                    onChange={(e) => updateFields({city: e.target.value})}
                    />
                <label>State</label>
                <input
                    value={state}
                    required 
                    type="text"
                    onChange={(e) => updateFields({state: e.target.value})} 
                    />
                <label>Pin code</label>
                <input
                    value={pincode}
                    required 
                    min={1} 
                    type="text" 
                    onChange={(e) => updateFields({pincode: e.target.value})}
                    />
            </div>
        </FormWrapper>
    )
}

export default AddressForm