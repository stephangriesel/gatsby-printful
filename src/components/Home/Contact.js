import React from 'react'
// import Title from '../Globals/Title'

export default function Contact() {
    return (


        <section className="contact py-3 fade-in">
            {/* <Title title="Contact Us" /> */}
            <div>
                <form action="https://formspree.io/sgriesel@gmail.com"
                    method="POST">
                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <textarea name="description" id="description" className="form-control" rows="3" placeholder="Tell us more.." required />
                    </div>
                    <button type="submit" className="btn btn-grey btn-block text-capitalize mt-5">Talk to us</button>
                </form>
            </div>
        </section>

    )
}
