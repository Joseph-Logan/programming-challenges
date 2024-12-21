import React, { useState } from 'react'
import Table from './Table'

function Main() {
  const CURRENT_BALANCE = 17042.67
  
  const [amount, setAmount] = useState(null)
  const [error, setError] = useState('')

  const validateAmount = (value) => {
    if (!value) return 'Amount cannot be empty'
    if (value < 0.01) return 'Amount cannot be less than $0.01'
    if (value > CURRENT_BALANCE)
      return 'Amount cannot exceed the available balance'
    return ''
  }

  const handleInputChange = (value) => {
    const numericValue = parseFloat(value)
    const validationError = validateAmount(numericValue)
    setError(validationError)
    setAmount(validationError ? NaN : numericValue)
  }

  return (
    <div className='layout-column align-items-center mx-auto'>
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className='card-text layout-column align-items-center mt-12 px-8 flex text-center'>
          <label>
            I want to exchange $
            <input
              className='w-10'
              data-testid='amount-input'
              required
              type='number'
              placeholder='USD'
              value={amount}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            of my $<span>{CURRENT_BALANCE}</span>:
          </label>
          {error && (
            <p
              data-testid='error'
              className='form-hint error-text mt-3 pl-0 ml-0'
            >
              {error}
            </p>
          )}
        </div>
      </section>
      <Table amount={amount} />
    </div>
  )
}
export default Main
