import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
        <h2 className="title">Contact</h2>

        <form action="https://formspree.io/xlegryqq" method="POST">
          <input type="text" name="name" placeholder="Name"/>

          <input type="email" name="_replyto" placeholder="Email"/>

          <textarea name="message" placeholder="Message"></textarea>

          <input id="submit"
            type="submit"
          />
      </form>
      

      </section>
  )
}
