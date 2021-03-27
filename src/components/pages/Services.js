import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AddPillowForm from '../AddPillowForm';
import addPillow from "../services/pillowHandlers"


export default function Services({ history }) {

  function handleSubmit(e) {
    e.preventDefault()
    const el = e.target
    const all = [el.title,el.price,el.link,el.description].map(el=> el.value)
    //Sent the pillow to DB :)
    addPillow(all)
    .then(res=> {
      console.log(res)
      history.pushState('/')
    })
  }
  return (
      <AddPillowForm/>
  )
}
