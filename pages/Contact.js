import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
const mongoose = require('mongoose')
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: String,
  email: String,
  number: String,
  message: String
})


const contact = mongoose.model('contact', contactSchema)
const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const onsubmit = async (e) => {
    e.preventDefault()
   await contact.create({
      name: name,
      email: email,
      phone: phone,
      desc: desc
    })
    // const postUserQuestion = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body)
    // };
    // await fetch('http://localhost:3000/api/postcontact', postUserQuestion)
    alert('Your question is sent')
    setdesc('')
    setemail('')
    setname('')
    setphone('')
  }
  const onchange = (e) => {
    if (e.target.name === 'email') {
      setemail(e.target.value)
    }
    if (e.target.name === 'name') {
      setname(e.target.value)
    }
    if (e.target.name === 'desc') {
      setdesc(e.target.value)
    }
    if (e.target.name === 'phone') {
      setphone(e.target.value)
    }

  }

  return (
    <form className={styles.container} onSubmit={onsubmit}>
      <div className={styles.mb2}>
        <label htmlFor="name" className={styles.formlabel}><b>Name</b></label>
        <input value={name} onChange={onchange} name='name' type="text" className={styles.input} id="name" />
      </div>

      <div className={styles.mb2}>
        <label htmlFor="phone" className={styles.formlabel}><b>Phone</b></label>
        <input value={phone} onChange={onchange} name='phone' type="phone" className={styles.input} id="phone" />
      </div>
      <div className={styles.mb2}>
        <label htmlFor="exampleInputEmail1" className={styles.formlabel}><b>Email</b></label>
        <input value={email} onChange={onchange} name='email' type="email" className={styles.input} id="email" />
      </div>
      <div className={styles.mb2}>
        <label className={styles.formlabel} htmlFor="floatingTextarea2"><b>Your ?</b></label>
        <textarea value={desc} type="desc" name='desc' onChange={onchange} className={styles.input} placeholder="Leave Your Question" id="desc"></textarea>
      </div>

      <button className={styles.btn} type="submit" >Submit</button>
    </form>
  )
}

export default Contact