import React from 'react'
import classes from './Contact.module.css'

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
      <h1>Send us a message!!</h1>
      <div className={classes.contact_form}>
        <form>
          <ul>
            <li>
              <input placeholder="Name" type="text" name="name" required />
            </li>
            <li>
              <input placeholder="Email" type="email" name="email" required />
            </li>
            <li>
              <input placeholder="Subject" type="text" name="subject" required />
            </li>
            <li>
              <textarea placeholder="Message" name="message" required></textarea>
            </li>
            <li>
              <input type="submit" className={classes.button} value="SEND" />
            </li>
          </ul>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact