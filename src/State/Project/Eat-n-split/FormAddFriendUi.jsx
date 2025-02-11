/* eslint-disable react/prop-types */

import { useState } from 'react'
import ButtonUi from './ButtonUi'
import './index.css'

const FormAddFriendUi = ({onClickhandleAddFriend}) => {
  // const [user, setUser] = useState({name:'',image:''})

  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return; // Prevent submitting empty values

    //creating unique id for each user
    const id= crypto.randomUUID

    const newFriend = {
      id, // Unique ID
      name: name,
      image: `${image}?=$${id}`,
      balance:0,
    };

    onClickhandleAddFriend(newFriend); // Pass new friend to parent component
    
    setName('')
    // setImage('')this part is auto generation we are not giving image every time 

    // setUser({ name: "", image: "" }); // Reset form fields
  }
   
  

  return (
    <>
      <form className='form-add-friend' onSubmit={handleSubmit}>
        <label >Friend Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="">Image url</label>
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>

        <ButtonUi>ADD</ButtonUi>
      </form>
    </>
  )
}

export default FormAddFriendUi