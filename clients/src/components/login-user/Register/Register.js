import React, { useState } from 'react';

const Register = () => {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInfo({ ...info, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(info.email, info.password, info.firstName, info.lastName)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="firstName"
                                        type="text"
                                        placeholder="first name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="lastName"
                                        type="text"
                                        placeholder="last name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="email"
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;