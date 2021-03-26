import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import addPillow from "../services/pillowHandlers"

import firebase from '../../firebase'
import '../../App.css';

export default function Services({  }) {

  function handleSubmit(e) {
    e.preventDefault()
    const el = e.target
    const all = [el.title,el.price,el.link,el.description].map(el=> el.value)
    addPillow(all)
  }
  return (
    <div className="enter-products">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="link">link</label>
        <input type="text" name="link" id="link"/>

        <label htmlFor="description">description</label>
        <textarea type="text" name="description" id="description"/>

        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" />

      <input type="submit" value="Send to DB"/>
      </form>
    </div>
  )
}
