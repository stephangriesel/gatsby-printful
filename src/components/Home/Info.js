import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section>
            {/* <div className={styles.sticky}> */}
            <section className="py-5">
                <div className="container"></div>
                <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi iusto, aspernatur rerum tempore ea error reprehenderit eveniet illo quisquam dolore culpa soluta libero aperiam corporis repudiandae consequuntur fugiat eligendi quos ad perspiciatis velit recusandae deserunt animi? Eligendi, atque! Eligendi molestias excepturi quae fugit deleniti illo quisquam possimus doloremque.
                    </p>
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
