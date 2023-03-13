import React, { useEffect } from "react"
import "./main.scss"
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker
} from "react-icons/hi"
import Aos from "aos"
import "aos/dist/aos.css"

const Data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULITURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores mollitia eos ab tempore laboriosam illum quasi reprehenderit vero obcaecati?"
  }
]

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right"  className="title">Most visited destinations</h3>
        <div className="secContent grid">
          {Data.map(
            ({ id, img, destTitle, location, grade, fees, description }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={img} alt={destTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {grade}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className="icon" />
                    </button>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default Main
