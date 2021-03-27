import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AddPillowForm from '../AddPillowForm';
import addPillow from "../services/pillowHandlers"


export default function Services({ history }) {
console.log(history)
  
  return (
      <AddPillowForm history={history}/>
  )
}
