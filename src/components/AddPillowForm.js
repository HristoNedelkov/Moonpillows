import React from 'react'
import './AddPillowForm.css'
import addPillow from './services/pillowHandlers'


function AddPillowForm() {

    function handleSubmit(e) {
        e.preventDefault()
        const el = e.target
        const all = [el.title,el.price,el.link,el.description].map(el=> el.value)
        //Sent the pillow to DB :)
        addPillow(all)
      }

    return (
       
  <div className="wrapper">
    <form className="form" onSubmit={handleSubmit}>
      <div className="pageTitle title">Add new pillow</div>
      <div className="secondaryTitle title">Please fill this form to add a pillow.</div>
      
      <input type="text" className="name formEntry" name="title" placeholder="Title"/>
             
      <input type="text" className="email formEntry" placeholder="Image address" name="link"/>
      
      <input type="number" step="any"  min="0.00" className="email formEntry" placeholder="Price" name="price"/>

      
      <textarea className="message formEntry" placeholder="Description" name="description"></textarea>
            
      <button className="submit formEntry"> Submit </button>
    </form>
  </div>
    )
}

export default AddPillowForm
