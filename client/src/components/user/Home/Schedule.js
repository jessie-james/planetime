import React from 'react'
import Calendar from './Calendar'
import Times from './Times'

class Schedule extends React.Component {
    render() {
        return (
            <div className="home__schedule">
                <div className="container">
                    <Calendar/>
                    {/*<Times/>*/}
                </div>

            </div>
        )
    }
}

export default Schedule