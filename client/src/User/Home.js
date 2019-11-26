import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-signup-side'>
                <form action="" className='home-signup'>
                    <label htmlFor="">Name</label><input placeholder='First Name' type="text"/>
                    <input type="text" placeholder='Last Name'/>
                    <label htmlFor="">Birthday</label><input type="date"/>
                    <label htmlFor="">Start date</label><input type="date"/>
                    <label htmlFor="">End Date</label><input type="date"/>
                    <input type="time"/>
                    <input type="time"/>
                </form>
                <div>
                    <h3>Rulez</h3>
                    <ul>
                        <li>no Moronis allowed</li>
                        <li>no Kevins allowed</li>
                        <li>no Jessies allowed</li>
                        <li>only Jeremy is allowed</li>
                    </ul>
                </div>
                <div>
                    <h3>Specs:</h3>
                    <ul>
                        <li>this is a spec (missing icon)</li>
                        <li>this is a spec (missing icon)</li>
                        <li>this is a spec (missing icon)</li>
                        <li>this is a spec (missing icon)</li>
                    </ul>
                </div>
                <div>
                    <h3>Things to keep in mind:</h3>
                    <ul>
                        <li>We arent responsible for your death</li>
                        <li>dont drink and fly</li>
                        <li>please keep your hands and feet inside the plane at all times</li>
                        <h4>full disclaimer can be read <a href='https://google.com'>here</a></h4>
                    </ul>
                </div>
            <button>Book Now!! >> </button>
            </div>
            <div>
                {/* res overview here */}
            </div>
            
        </div>
    )
}

export default Home