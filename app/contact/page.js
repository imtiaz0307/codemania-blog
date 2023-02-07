"use client"

import styles from './Contact.module.css'
import { useEffect, useRef, useState } from 'react'

const ContactPage = () => {
    const [buttonText, setButtonText] = useState('Submit')
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const messageInput = useRef(null);
    const form = useRef(null)

    return (
        <div className={styles.contactPage}>
            <h2>Have Any Queries, Suggestions?</h2>
            <form className={styles.contactForm} ref={form} >
                <div className={styles.twoInput}>
                    <div className={styles.inputField}>
                        <label htmlFor="name">Your Name<span>*</span></label>
                        <input type="text" id="name" name='name' placeholder="Enter your name." required minLength={4} ref={nameInput} />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="email">Your Email<span>*</span></label>
                        <input type="email" id="email" name='email' placeholder="Enter your email." required ref={emailInput} />
                    </div>
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="subject">Enter Subject</label>
                    <input type="text" id="subject" name='subject' placeholder="Subject for message." ref={subjectInput} />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="message">Enter Message<span>*</span></label>
                    <textarea id="message" name='message' placeholder="Enter your message." required minLength={20} rows={7} ref={messageInput} />
                </div>
                <button type="submit">{buttonText}</button>
            </form>
        </div >
    )
}

export default ContactPage;