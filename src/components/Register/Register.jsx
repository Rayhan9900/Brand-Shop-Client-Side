import React, { useContext, } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';

function Register() {



    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password)

        if (password.length <= 6) {
            toast.error('Password should be at least 6 characters or longar');
            return
        }

        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case charecters');
            return
        }

        else if (!/[!@#$%^&*]/.test(password)) {
            toast.error("don't have a special character")
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('user created successfully');
            })
            .catch(error => {
                toast.error(error.message)
            })

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                toast.success('Login Successful')
            })
            .catch(error => {
                toast.error(error.message)
            })



    }


    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/fHWRs8Z/resiter.jpg')]">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-2xl md:text-5xl font-bold">Please Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        <Link to="/login">
                            <p>already have an account ? <button className='text-blue-500 underline'>Login</button></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register