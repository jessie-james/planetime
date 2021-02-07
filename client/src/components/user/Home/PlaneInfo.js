// PlaneInfo.js
// ==============================

// imports
import React from 'react'
import planeImage from "../../../assets/images/plane.jpg";

// component
class PlaneInfo extends React.Component {
    render() {
        return (

                <div className={`home__plane-info ${this.props.mobileCartEnabled ? "hidden" : null}`}>
                    <div className="home__plane-info-header">
                        <h1 className={"home__plane-info-header-title"}>1975 Piper Arrow</h1>
                        <h4 className={"home__plane-info-header-price"}>$175 per hour</h4>
                    </div>
                    <p className="home__plane-info-copy">This is a beautiful 1975 Piper Arrow II 200 hp retractable
                        complex plane. You can rent thisplane out
                        for business from instructing flight lessons or clocking your pilot hours day or night. You can
                        also
                        take the plane out for pleasure and enjoy a weekend up in Jackson Hole or a night down in St.
                        George; the sky's the limit!</p>
                    <ul className="home__plane-info-spec-list container">
                        <li className="home__plane-info-spec-list-item">Just under 400hrs SMCH</li>
                        <li className="home__plane-info-spec-list-item">New avionic in 1st quarter of 2020</li>
                        <li className="home__plane-info-spec-list-item">Over night flights available if booked a week in
                            advance
                        </li>
                        <li className="home__plane-info-spec-list-item">50 and 100 hr blocks of time are discounted</li>
                        <li className="home__plane-info-spec-list-item">$175 per hour</li>
                    </ul>
                    <p className="home__plane-info-important">
                        <span>*IMPORTANT* </span> Only a $10 deposit is due at checkout. Hourly rate is due upon
                        returning the plane. You will only be charged for the time that the plane is actually in the
                        air.
                    </p>
                    <button className="home__book-now" onClick={this.props.toggleMobileCart}>Book Now!</button>
                </div>

        )
    }
}

// exports
export default PlaneInfo