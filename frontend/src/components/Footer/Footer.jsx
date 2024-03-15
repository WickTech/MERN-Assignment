import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"
import git from "../../assets/github.svg"
import phone from "../../assets/telephone.svg"
import email from "../../assets/email.svg"


export default function Footer() {
  console.log(phone,git)
  return (
  <footer className="footer-distributed">
      
      <div className="footer-left">
      
      </div>
      
      <div className="footer-center">
        <div>
          <img src={phone} alt="img" />
          <p>91 7000797371</p>
        </div>
        <div>
          <img src={email} alt="img" />
          <p>
            rishabhverma707@gmail.com
          </p>
        </div>
      </div>
      
      <div className="footer-right">
        <div className="footer-icons">
          <Link href="https://github.com/WickTech">
            <img src={git} alt="git" />
          </Link>
        </div>
      </div>
</footer>

  )
}
