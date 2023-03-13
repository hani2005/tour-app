import React, { useEffect } from "react"
import { FiChevronRight, FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from "react-icons/md"
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter
} from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import "./footer.scss"
import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          src="https://player.vimeo.com/external/332483109.hd.mp4?s=f7703819e296d43d6f95be3af9af40cbcb3e7a9b&profile_id=174"
          muted
          autoPlay
          loop
          type="video/mp4"
        ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis quidem, in blanditiis error inventore sequi impedit
              distinctio deleniti. Perferendis beatae harum, tempore veritatis
              ea tenetur sit fugit possimus doloremque illo?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">

            <div data-aos="fade-up" data-aos-duration="3000"  className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rent Cars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000"  className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>&#169; Designed and Built by Hani Mohammed</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
