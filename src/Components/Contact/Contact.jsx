import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="subtitle">Contact Me</h1>
                        <p><i className="fa-solid fa-envelope"></i> kvsmsourish@gmail.com</p>
                        <p><i className="fa-solid fa-phone-volume"></i> 6309767385</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/peoplecallmesourish/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/sourish-kvsm-894387234/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    
                    <div className="contact-right">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Convey your Message" />
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
