import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import m_icon from '../../assets/mail-icon.png'
import p_icon from '../../assets/phone-icon.png'
import l_icon from '../../assets/location-icon.png'
const Contact = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "690f4bd8-e862-4a56-ba86-874350d203f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon}/></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
            <li><img src={m_icon}/> singhogulshan@gmail.com</li>
            <li><img src={p_icon}/>+91 7261822471</li>
            <li><img src={l_icon}/>Chitkara university , Baddi<br/>Himanchal Pradesh</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input  type="text" name='name' placeholder="Enter your name" required/>
            <label>Phone Number</label>
            <input  type="tel" name='phone' placeholder="Enter your number" required/>
            <label>Write your message</label>
            <textarea   name="message" rows={6} placeholder="Enter your message" required/>
            <button type="submit" className="btn dark-btn">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
