import React from 'react';
import { FaRegHandPeace } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-capatalize">
                        <h5 className="font-weight-bold text-muted">Created & Hosted by <FaRegHandPeace /> <a href="https://www.consulitate.co.za">Consulitate</a></h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}
