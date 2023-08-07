// Write your code here
import './index.css'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

const overlayStyles = {
  backgroundColor: '#ffffff',
  border: '0px',
}

const Header = () => (
  <div className="header-background">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        className="logo-img"
        alt="website logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            data-testid="hamburgerIconButton"
            type="button"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
        overlayStyle={overlayStyles}
      >
        {close => (
          <div className="popup-container">
            <div className="close-button-container">
              <button
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
                type="button"
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <div className="popup-content-container">
              <div className="icon-container">
                <AiFillHome className="icon-img" />
                <Link to="/" className="link-item">
                  <p className="icon-name" onClick={() => close()}>
                    Home
                  </p>
                </Link>
              </div>
              <div className="icon-container">
                <BsInfoCircleFill className="icon-img" />
                <Link to="/about" className="link-item">
                  <p className="icon-name" onClick={() => close()}>
                    About
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
