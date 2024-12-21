import React, { useEffect, useState } from 'react'
import validator from 'validator'

function EmployeeValidationForm() {
  const initialState = {
    form: {
      name: '',
      email: '',
      employeeId: '',
      joiningDate: '',
    },
    errors: {
      name: true,
      email: true,
      employeeId: true,
      joiningDate: true,
    },
  }
  const [state, setState] = useState(initialState)
  const [buttonDisable, setButtonDisable] = useState(true)
  const handleOnInput = (e) => {
    const { name, value } = e.target
    const validationRules = {
      name: (value) =>
        !validator.isLength(value, { min: 4 }) || !/^[A-Za-z\s]*$/.test(value),
      email: (value) => !validator.isEmail(value),
      employeeId: (value) =>
        !validator.isLength(value, { min: 6, max: 6 }) ||
        !validator.isNumeric(value),
      joiningDate: (value) =>
        validator.isAfter(value, new Date().toISOString()),
    }
    setState((prevState) => {
      return {
        form: { ...prevState.form, [name]: value },
        errors: { ...prevState.errors, [name]: validationRules[name](value) },
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setState(initialState)
  }
  useEffect(() => {
    const isDisable = Object.values(state.errors).some((error) => error)
    setButtonDisable(isDisable)
  }, [state.errors])
  return (
    <form
      className='layout-column align-items-center mt-20'
      onSubmit={handleSubmit}
    >
      <div
        className='layout-column align-items-start mb-10 w-50'
        data-testid='input-name'
      >
        <input
          className='w-100'
          type='text'
          name='name'
          value={state.form.name}
          placeholder='Name'
          data-testid='input-name-test'
          onChange={handleOnInput}
        />
        {state.errors.name && (
          <p className='error mt-2'>
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className='layout-column align-items-start mb-10 w-50'
        data-testid='input-email'
      >
        <input
          className='w-100'
          type='text'
          name='email'
          value={state.form.email}
          placeholder='Email'
          onChange={handleOnInput}
        />
        {state.errors.email && (
          <p className='error mt-2'>Email must be a valid email address</p>
        )}
      </div>
      <div
        className='layout-column align-items-start mb-10 w-50'
        data-testid='input-employee-id'
      >
        <input
          className='w-100'
          type='text'
          name='employeeId'
          value={state.form.employeeId}
          placeholder='Employee ID'
          onChange={handleOnInput}
        />
        {state.errors.employeeId && (
          <p className='error mt-2'>Employee ID must be exactly 6 digits</p>
        )}
      </div>
      <div
        className='layout-column align-items-start mb-10 w-50'
        data-testid='input-joining-date'
      >
        <input
          className='w-100'
          type='date'
          name='joiningDate'
          value={state.form.joiningDate}
          placeholder='Joining Date'
          onChange={handleOnInput}
        />
        {state.errors.joiningDate && (
          <p className='error mt-2'>Joining Date cannot be in the future</p>
        )}
      </div>
      <button data-testid='submit-btn' type='submit' disabled={buttonDisable}>
        Submit
      </button>
    </form>
  )
}
export default EmployeeValidationForm
