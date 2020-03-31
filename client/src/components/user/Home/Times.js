import React from 'react'

const Times = (props)=> {

        return (
            <div className="home__times">
                <p>THESE ARE THE TIMES! {props.date.toUTCString()}</p>
                <div className="home__times-list">
                    <button className="home__times-list-item home__times-list-item--unavailable"
                            value={"00:30,01:30"} onClick={props.getTime}>12:30 AM - 1:30 AM
                    </button>
                    <button className="home__times-list-item" value={"2:00am, 0300am"} value={"02:00,03:00"} onClick={props.getTime}>2:00 AM -
                        3:00 AM
                    </button>
                    <button className="home__times-list-item" value={"03:30,04:30"} value={"03:30,04:30"}>3:30 AM - 4:30
                        AM
                    </button>
                    <button className="home__times-list-item" value={"05:00,06:00"}>5:00 AM - 6:00 AM</button>
                    <button className="home__times-list-item" value={"06:30,07:30"}>6:30 AM - 7:30 AM</button>
                    <button className="home__times-list-item" value={"08:00,09:00"}>8:00 AM - 9:00 AM</button>
                    <button className="home__times-list-item" value={"09:30,10:30"}>9:30 AM - 10:30 AM</button>
                    <button className="home__times-list-item" value={"11:00,12:00"}>11:00 AM - 12:00 PM</button>
                    <button className="home__times-list-item" value={"12:30,13:30"}>12:30 PM - 1:30 PM</button>
                    <button className="home__times-list-item" value={"14:00,15:00"}>2:00 PM - 3:00 PM</button>
                    <button className="home__times-list-item" value={"15:30,16:30"}>3:30 PM - 4:30 PM</button>
                    <button className="home__times-list-item" value={"17:00,18:00"}>5:00 PM - 6:00 PM</button>
                    <button className="home__times-list-item" value={"18:30,19:30"}>6:30 PM - 7:30 PM</button>
                    <button className="home__times-list-item" value={"20:00,21:00"}>8:00 PM - 9:00 PM</button>
                    <button className="home__times-list-item" value={"21:30,22:30"}>9:30 PM - 10:30 PM</button>
                    <button className="home__times-list-item" value={"23:00,00:00"}>11:00 PM - 12:00 AM</button>
                </div>
            </div>
        )

}

export default Times