import React from 'react'
import Title from '../Globals/Title'
import styles from '../css/parallax.module.css';

export default function Contact() {
    return (


        <section className="contact py-3">
            <Title title="Contact Us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/sgriesel@gmail.com"
                        method="POST">
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <textarea name="description" id="description" className="form-control" rows="3" placeholder="Tell us more.." />
                        </div>
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Talk to us</button>
                    </form>
                </div>
            </div>
        </section>

    )
}
