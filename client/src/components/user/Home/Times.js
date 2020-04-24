// import React, {useState, useEffect} from 'react'
// // import axios from 'axios'
// // import TimeButton from './TimeButton'
// import {timeArr} from './_times'
// import axios from "axios";
//
// const Times = (props) => {
//     const [bookings, setBookings] = useState()
//     const [selectStart, setSelectStart] = useState(true)
//     const [selectEnd, setSelectEnd] = useState(false)
//     const [startDate, setStartDate] = useState()
//     const [endDate, setEndDate] = useState()
//     const [dates, setDates] = useState([])
//     const [datesSelected, setDatesSelected] = useState(0)
//     const [selectReset, setSelectReset] = useState(false)
//     const [selected, setSelected] = useState(false)
//     const [buttonType, setButtonType] = useState()
//
//     const availability = (startDate, endDate) => {
//
//         axios.get(`http://localhost:3000/booking/search?startDate=${startDate}&endDate=${endDate}`)
//             .then((response) => {
//                 // console.log("AXIOS RESPONSE", response)
//                 setBookings(response.data)
//             }).catch(err => console.log(err))
//
//     }
//     let dateArray = [];
//     const addDates = (date) => {
//         setDates([...dates, date])
//         console.log("addDates called")
//         console.log("added date", date)
//
//     }
//     console.log("current date", dates)
//     const resetDates = () => {
//         setDates([])
//         console.log("array has been emptied", dates)
//     }
//     const removeLastDate = (fullDateAndTime) => {
//         const filterDate = (i) => i !== fullDateAndTime
//         setDates(prevState => prevState.filter(filterDate))
//     }
//     const datesSelectedIncrement = () => {
//         setDatesSelected(prevState => prevState + 1)
//     }
//     const datesSelectedDecrement = () => {
//         setDatesSelected(prevState => prevState - 1)
//     }
//
//     console.log("previous date", dates)
//     // let getDateOnClick = (e, startEndDate)=>{
//     //     console.log("get date on click parameter",startEndDate)
//     //     // if(startSelected === false){
//     //     //     setStartSelected(!startSelected)
//     //     // }
//     //
//     //     // setStartDate(startEndDate.startDate)
//     //     // setEndDate(startEndDate.endDate)
//     // }
//     const date = props.date
//     const renderTimes = timeArr.map((block) => {
//
//         const minutes = block.minutes
//         const hours = block.hours
//         const key = block.key
//         // console.log(hours, minutes, key)
//
//
//         // This is the initial default date with time set to 12 A.M
//         const initDateTime = new Cart(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0).toISOString()
//         const initDateTimeParse = Cart.parse(initDateTime)
//         // console.log("Initial date and time", initDateTime)
//         // console.log("Initial date and time parsed", initDateTimeParse)
//
//
//         // Current time and date based off of the selected time button
//         const selectionDateTime = new Cart(date.getFullYear(), date.getMonth(), date.getDate(), block.hours, block.minutes).toISOString()
//         const selectionDateTimeParse = Cart.parse(selectionDateTime)
//         // console.log(selectionDateTime)
//         // console.log(selectionDateTimeParse)
//
//         // Time in milliseconds between the initial date and time
//         const timeFromInit = selectionDateTimeParse - initDateTimeParse
//         // console.log(timeFromInit)
//         let buttonSelected;
//
//
//         console.log(buttonType)
//         return <TimeButton
//             fullDate={props.date}
//             year={date.getFullYear()}
//             month={date.getMonth()}
//             day={date.getDate()}
//             hours={hours}
//             minutes={minutes}
//             key={key}
//             timeFromInit={timeFromInit}
//             // getDateOnClick={getDateOnClick}
//             selectStart={selectStart}
//             setSelectStart={setSelectStart}
//             selectEnd={selectEnd}
//             setSelectEnd={setSelectEnd}
//             startDate={startDate}
//             setStartDate={setStartDate}
//             buttonType={buttonType}
//             addDates={addDates}
//             dates={dates}
//             setButtonType={setButtonType}
//             removeLastDate={removeLastDate}
//             resetDates={resetDates}
//             datesSelected={datesSelected}
//             setDatesSelected={setDatesSelected}
//             dateSelectedIncrement={datesSelectedIncrement}
//             datesSelectedDecrement={datesSelectedDecrement}
//             selectReset={selectReset}
//             setSelectReset={setSelectReset}
//             selected={selected}
//             setSelected={setSelected}
//
//         />
//     })
//     // console.log("start selected", startSelected)
//     return (
//         <div className="home__times">
//             <p>{dates}</p>
//             <p>THESE ARE THE TIMES! {props.date.toUTCString()}</p>
//             <div className="home__times-list">
//                 {/*{renderTimes}*/}
//             </div>
//         </div>
//     )
//
// }
//
// export default Times