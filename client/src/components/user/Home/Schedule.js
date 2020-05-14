// Schedule.js
// ==============================

// imports
import React from 'react'
import Calendar from './Calendar'

// component
class Schedule extends React.Component {
    render() {
        return (
            <div className="home__schedule">
                {/*<div className="container">*/}
                    <Calendar />
                {/*</div>*/}

            </div>
        )
    }
}

// exports
export default Schedule