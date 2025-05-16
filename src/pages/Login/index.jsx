import React from 'react'

const LoginPage = () => {
    return (
        <section className='w-screen h-screen bg-[#f1f1f1] flex items-center justify-center'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </section>
    )
}

export default LoginPage
