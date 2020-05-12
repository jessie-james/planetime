import React from "react";

const AuthForm = props => {
    const {handleChange, handleSubmit, username, password, password2, firstName, lastName, streetAddress, city, state, zip, btnText} = props;

    return (
        <div className="wrapper">
            {props.login && (
                <form onSubmit={handleSubmit} action="" id="form" className="login-form">
                    <label className="login-form__label">Email</label>
                    <input
                        type="text"
                        name="username"
                        className="login-form__user-name"
                        id="username"
                        value={username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <br/>
                    <label className="login-form__label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="login-form__password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <button className={"login-form__submit"}>{btnText}</button>
                    <br/>
                </form>
            )}
            {!props.login && (
                <form onSubmit={handleSubmit} action="" id="form" className="signup-form">
                    <label htmlFor="firstName" className={"signup-form__label"}>First Name:</label>
                    <input
                        type="text"
                        name={"firstName"}
                        value={firstName}
                        onChange={handleChange}
                        className={"signup-form__first-name"}
                    />
                    <label className="signup-form__label">Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        className="signup-form__last-name"
                        id="lastName"
                        value={lastName}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <br/>
                    <label className="signup-form__label">Street Address</label>
                    <input
                        type="text"
                        name="streetAddress"
                        className="signup-form__street"
                        id="streetAddress"
                        value={streetAddress}
                        onChange={handleChange}
                        placeholder="street address"
                    />
                    <label htmlFor="" className={"signup-form__label"}>City: </label>
                    <input
                        type="text"
                        name={"city"}
                        value={city}
                        onChange={handleChange}
                        placeholder={"city"}
                        className={"signup-form__city"}
                    />
                    <label htmlFor="" className={"signup-form__label"}>State: </label>
                    <input
                        type="text"
                        name={"state"}
                        value={state}
                        onChange={handleChange}
                        placeholder={"state"}
                        className={"signup-form__state"}
                    />
                    <label htmlFor="" className={"signup-form__label"}>Zip: </label>
                    <input
                        type="text"
                        name={"zip"}
                        value={zip}
                        onChange={handleChange} signup-form__label
                        placeholder={"zip code"}
                        className={"signup-form__zip"}
                    />
                    <label className="signup-form__label">Email</label>
                    <input
                        type="text"
                        name="username"
                        className="signup-form__username"
                        id="username"
                        value={username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <br/>
                    <label className="signup-form__label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="signup-form__password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <label className="signup-form__label">Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        className="signup-form__password2"
                        id="password2"
                        value={password2}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <button className={"signup-form__submit"}>{btnText}</button>
                    <br/>
                </form>
            )}

        </div>
    );
};

export default AuthForm;
