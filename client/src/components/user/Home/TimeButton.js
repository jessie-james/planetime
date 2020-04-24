// import React, {useEffect, useState} from 'react'
// import axios from "axios";
//
// //TRY TO RENDER ALL BUTTONS FIRST THEN DO ONE AXIOS CALL
// const TimeButton = (props) => {
//     const [bookings, setBookings] = useState()
//     const [selected, setSelected] = useState(false)
//     const [buttonType, setButtonType] = useState("")
//
//     const date = props.fullDate
//     const thisTime = `${props.hours}:${props.minutes}`
//     const fullDateAndTime = new Cart(date.getFullYear(), date.getMonth(), date.getDate(), props.hours, props.minutes).toISOString()
//
//
//     if (props.dates.length < 1) {
//         props.setButtonType("start date")
//         // console.log(buttonType)
//
//     }
//     if (props.dates.length > 0) {
//         props.setButtonType("end date")
//     }
//     // console.log(props.dates)
//     const reset = ()=>{
//         setSelected(false)
//         setButtonType("start date")
//         props.setSelectReset(false)
//         props.resetDates()
//         props.setDatesSelected(0)
//         props.setSelectStart(false)
//         props.setSelectEnd(false)
//     }
//     const handleClick = () => {
//         /*
//         * FUNCTIONALITY
//         * Max array length is two. startDate and endDate.
//         *   clicking button sets selected to true which changes the color of the button indicate that it is selected
//         *   date of the button is added to index 0 of the dates array.
//         *
//         *   clicking button sets selected to true which changes the color of the button to indicate that it is selected
//         *   date of the button is added to index 1 of the dates array.
//         * if another button is clicked after end date is selected, the array is reset and that button date becomes the new index 0 of the dates array.
//         * */
//
//         if (props.dates.length >= 2 && !props.dates.includes(fullDateAndTime)) {
//             reset()
//         }
//         if (props.dates.length < 2) {
//             props.setSelectReset(false)
//             props.addDates(fullDateAndTime)
//         }
//         // if(selected){
//         //     props.removeLastDate(fullDateAndTime)
//         // }
//         props.dateSelectedIncrement()
//         props.setSelected(!selected)
//         console.log(props.dates)
//         console.log(props.buttonType)
//     }
//
//     console.log(props.dates)
//
//
//     const time = new Cart(date.getFullYear(), date.getMonth(), date.getDate(), props.hours, props.minutes).toLocaleTimeString(navigator.language, {
//         hour: '2-digit',
//         minute: '2-digit'
//     })
//     // console.log(props)
//     // console.log("TIME",time)
//
//     // console.log(startTime, endTime)
//     console.log('time button rendered')
//
//     useEffect(()=>{
//
//         if (props.selectReset) {
//             setSelected(false)
//         }
//     })
//
//     return (
//         <button
//             className={`home__times-list-item ${bookings && bookings === "unavailable" ? "home__times-list-item--unavailable" : null} ${props.selected  && props.selectReset === false ? "home__times-list-item--selected" : null}`}
//             onClick={handleClick}>{bookings && bookings === "unavailable" ? "UNAVAILABLE" : `${time}`}</button>
//     )
// }
//
// export default TimeButton;