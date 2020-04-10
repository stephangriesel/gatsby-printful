import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import styles from '../css/parallax.module.css';

export default function BackgroundSection({ img, styleClass, title, children }) {
    return (
        <section className={styles.contentArea}>
            <BackgroundImage className={styleClass} fluid={img}>
                <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                    {title}
                </h1>
                {children}
            </BackgroundImage>
        </section>
    )
}

BackgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}
