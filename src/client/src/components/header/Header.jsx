import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">

                <div className="headerListItems active">
                    <span >
                        <Link className='btn' to="/Movie/MovieShowing">BUY TICKETS</Link>
                    </span>
                </div>

                <div className="headerListItems">
                    <span >Movie</span>
                </div>

                <div className="headerListItems">
                    <span>Promotion</span>
                </div>

                <div className="headerListItems">
                    <span>Cinema</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header