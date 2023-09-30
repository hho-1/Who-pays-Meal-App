import React from 'react'
import Button from './Button'

export const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
        <h2>Split a bill with X</h2>

        <label>💰 Bill amount:</label>
        <input type="text" />

        <label>💵 Your expense:</label>
        <input type="text" />

        <label>💶 X's expense:</label>
        <input type="text" disabled/>

        <label>Who pays the bill?</label>
        <select>
            <option value = "user">You</option>
            <option value = "friend">X</option>
        </select>

        <Button>Split Bill</Button>
    </form>
  )
}
