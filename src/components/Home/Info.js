import React from 'react'
// import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section>
            {/* <div className={styles.sticky}> */}
            <section className="py-5">
                <div className="container"></div>
                <Title title="About Us"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted">
                            Hindernis is a brand that gives everyday carry a new meaning specializing in providing high quality products with solid performance for real world use.
                        </p>
                        <p className="lead text-muted mb-5">Hindernis "alle hindernisse voor jou wegvee"</p>
                        {/* <Link to="/about">
                            <button className="btn text-uppercase btn-yellowish">About</button>
                        </Link> */}
                    </div>
                </div>
            </section>
            {/* </div> */}
        </section>
    )
}
