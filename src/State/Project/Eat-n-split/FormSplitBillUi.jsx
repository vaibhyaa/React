import React from 'react'
import ButtonUi from './ButtonUi'

const FormSplitBillUi = () => {
  return (
    <>
      <form className='form-split-bill' action="">
        <h2>SPLIT A BILL WITH FRIEND</h2>

        <label htmlFor="">Bill value</label>
        <input type="text" />

        <label htmlFor="">Your expense</label>
        <input type="text" />

        <label htmlFor="">friend expense</label>
        <input type="text" disabled/>

        <label htmlFor="">Who is paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">friend</option>

        </select>

        <ButtonUi>Split bill</ButtonUi>
      </form>
    </>
  )
}

export default FormSplitBillUi