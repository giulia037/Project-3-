import React from 'react';

export default function Contact() {
  return (
    <div>
        <div className="header">
      <h1>Contact</h1>
      <div className="header">
      <p>Reach out to us to find your new best friend</p>
      </div>
      </div>

      <form className="form">
        <input
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          name="Leave us a message"
          type="text"
          placeholder="Leave us a message"
        />
        <button type="button" >Submit</button>
      </form>
    </div>
  );
}

