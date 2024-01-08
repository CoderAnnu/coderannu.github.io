import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
// import {FaAngellist} from 'react-icons/fa';

function Footer() {

    const shortname = (name) => {
        if (name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme } = useContext(ThemeContext)

    return (
        <div className="footer" style={{ backgroundColor: theme.secondary }}>
            <p style={{ color: theme.tertiary }}>
                Made with
                <span style={{ color: theme.primary, margin: '0 0.5rem -1rem 0.5rem' }}>
                    ❤
                </span>
                by {shortname(headerData.name) } ✌🏻 
                {/* <FaAngellist  style={{ color: theme.primary, margin: '0 0.5rem -0.2rem 0rem' }}/> */}
            </p>
        </div>
    )
}

export default Footer

