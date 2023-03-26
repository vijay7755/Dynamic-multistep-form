import React, { FormEvent, useState } from 'react'
import AccountForm from './forms/accountForm'
import AddressForm from './forms/addressForm'
import UserForm from './forms/userForm'
import { useMultistepFrom } from './hooks/useMultistepForm'

const containerStyle: any = {
  position: "relative",
  background: "white",
  border: "1px solid black",
  borderRadius: "0.5rem",
  padding: "2rem",
  margin: "1rem",
  fontFamily: "Arial"
}

const stepper: any = {
  position: "absolute",
  right: "0.5rem",
  top: "0.5rem",
  fontWeight: "bold"
}

const formFooter: any = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "flex-end",
  gap: "0.5rem"
}

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  pincode: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
  email: "",
  password: ""
}

function App() {
  const [formData, setFormData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prev => {
      return {...prev, ...fields}
    })
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    next,
    back
  } = useMultistepFrom([
    <UserForm {...formData} updateFields={updateFields} />,
    <AddressForm {...formData} updateFields={updateFields} />,
    <AccountForm {...formData} updateFields={updateFields} />
  ])

  function handleSubmit(e: FormEvent) {
    console.log("submitevent: ", e)
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Account created successfully: ")
  }

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div style={stepper}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        <div>{step}</div>
        <div style={formFooter}>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
