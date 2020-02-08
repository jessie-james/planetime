import React from 'react'

const SignUpForm = (props) => {
    const { handleChange, handleSubmit, username, password, password2, btnText } = props
    return(
        <div className="container">
        <form onSubmit={handleSubmit} action="" id="form" className="form">
            <input 
                type="text" 
                name="username" 
                className="form-control"
                id="username"
                value={username} 
                onChange={handleChange} 
                placeholder="Username" />
                <br />
            <input 
                type="password" 
                name="password" 
                className="form-control"
                id="password"
                value={password} 
                onChange={handleChange} 
                placeholder="Password" />
                <br />
            <input
                type="password"
                name="password2"
                className="form-control"
                id="password2"
                value={password2}
                onChange={handleChange}
                placeholder="Confirm Password" />
                <button >{btnText}</button>
        </form>
        <br />
        </div>
    )

}

export default SignUpForm