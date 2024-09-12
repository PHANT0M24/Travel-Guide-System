import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const emailRef = useRef(null);

    const handleLogIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // Reset Error & Success
        setLoginError('');
        setLoginSuccess('');

        try {
            // Login with email and password
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result.user);

            // Check if the email is verified
            if (result.user.emailVerified) {
                setLoginSuccess("User logged in successfully.");

                // Assuming you have a newUser object to send to the backend
                const newUser = {
                    email: result.user.email,
                    uid: result.user.uid,
                };

                const response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                });

                const data = await response.json();
                if (data.insertedId) {
                    alert("Welcome to club!");
                    e.target.reset();  // Reset the form after successful registration
                }
            } else {
                alert("Please verify your email address.");
            }
        } catch (error) {
            console.log("Error", error);
            setLoginError(error.message);
        }
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please provide an email.");
            return;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("Please write a valid email.");
            return;
        }

        // Send password reset email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please check your email for the reset link.");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 font-bold text-5xl">Join For Exciting Adventures!!</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your Password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            loginError && <p className="text-red-700">{loginError}</p>
                        }
                        {
                            loginSuccess && <p className="text-green-600">{loginSuccess}</p>
                        }
                        <p>New to this Website? Please <Link to="/register"><span className="underline">Register</span></Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;