import React from 'react'

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col text-center mb-3">
                <h4 className="display-4 text-uppercase">{title}</h4>
            </div>
        </div>
    )
}
