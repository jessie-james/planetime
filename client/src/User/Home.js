import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-signup-side'>
                <form action="" className='home-signup'>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
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
            </div>
            <div>
                {/* res overview here */}
            </div>
            
        </div>
    )
}

export default Home