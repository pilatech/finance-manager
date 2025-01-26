import React from 'react'

export default function SignUp() {
 return (
    <main className="page">
        <div className="container">
             <h1 className="page-title">Sign Up for an Account</h1>
             <div className="form">
                <div className="form__error">
                    <p className="form__error-message">There has been some error</p>
                </div>
                <div className="form__fields">
                    <label className="form__label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" className="form__input" />
                </div>
                <div className="form__fields">
                    <label className="form__label" htmlFor="password1">Create Password</label>
                    <input type="password" id="password1" name="password1" className="form__input" />
                </div>
                <div className="form__fields">
                    <label className="form__label" htmlFor="password2">Confirm Password</label>
                    <input type="password" id="password2" name="password2" className="form__input" />
                </div>
                <div className="form__fields">
                    <button className="btn btn--primary">Sign Up</button>
                </div>
             </div>
        </div>
    </main>
 )
}
