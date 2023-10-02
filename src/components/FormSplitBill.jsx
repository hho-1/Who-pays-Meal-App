import React, { useState } from 'react'
import Button from './Button'

export const FormSplitBill = ({selectedFriend, onSplitBill}) => {

  const [bill, setBill] = useState("")
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriend = bill ? bill - paidByUser : ""
  const [whoPays, setWhoPays] = useState('user')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!bill || !paidByUser) return;

    onSplitBill(whoPays === 'user' ? paidByFriend : -paidByUser)
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill amount:</label>
        <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>

        <label>💵 Your expense:</label>
        <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

        <label>💶 {selectedFriend.name}'s expense:</label>
        <input type="text" disabled value={paidByFriend}/>

        <label>Who pays the bill?</label>
        <select value={whoPays} onChange={(e)=>setWhoPays(e.target.value)}>
            <option value = "user">You</option>
            <option value = "friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
    </form>
  )
}
