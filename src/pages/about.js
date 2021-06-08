import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>about</h1>
            <ul>
                <Link to="/" activeStyle={{ border: 'solid red 1px' }}>
                    Home
                </Link>
            </ul>
        </div>
    )
}
export default AboutPage
