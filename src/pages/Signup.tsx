import React, {useState} from "react";
import {signup} from "../services/authService.ts";
import axios from "axios";
import { Link } from "react-router-dom";


function Signup() {
    const [name, setName] =
        useState('');

    const [email, setEmail] =
        useState('');

    const [password, setPassword] =
        useState('');

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState('');

    const [success, setSuccess] =
        useState('');

    const handleSignup = async (
        e: React.FormEvent,
    ) => {

        e.preventDefault();

        try {
            setError('');
            setSuccess('');
            setLoading(true);

                await signup({

                    name,
                    email,
                    password,

                });

            setSuccess(
                'Account created successfully',
            );
        } catch (error) {

            if (
                axios.isAxiosError(error)
            ) {

                setError(

                    error.response?.data
                        ?.message ||

                    'Signup failed',
                );

            } else {

                setError(
                    'Something went wrong',
                );
            }

        } finally {

            setLoading(false);

        }
    };

    return (

        <div
            className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-slate-900
            px-4
         "
        >

            <div
                className="
                bg-slate-800
                p-8
                rounded-2xl
                w-full
                max-w-md
                shadow-2xl
            "
            >

                <h1
                    className="
                    text-3xl
                    font-bold
                    text-white
                    mb-6
                    text-center
                    "
                >
                    Signup
                </h1>

                {
                    error && (

                        <p
                            className="
        text-red-400
        mb-4
        text-sm
      "
                        >
                            {error}
                        </p>
                    )
                }

                {
                    success && (

                        <p
                            className="
        text-green-400
        mb-4
        text-sm
      "
                        >
                            {success}
                        </p>
                    )
                }

                <form
                    onSubmit={handleSignup}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Name"

                        value={name}

                        onChange={(e) =>
                            setName(e.target.value)
                        }

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-slate-700
                        text-white
                        outline-none
                        "
                    />

                    <input
                        type="email"
                        placeholder="Email"

                        value={email}

                        onChange={(e) =>
                            setEmail(e.target.value)
                        }

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-slate-700
                        text-white
                        outline-none
                        "
                    />

                    <input
                        type="password"
                        placeholder="Password"

                        value={password}

                        onChange={(e) =>
                            setPassword(
                                e.target.value,
                            )
                        }

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-slate-700
                        text-white
                        outline-none
                        "
                    />

                    <button
                        type="submit"

                        className="
                        w-full
                        bg-blue-500
                        hover:bg-blue-600
                        transition-all
                        py-3
                        rounded-xl
                        font-semibold
                        text-white
                    "
                    >
                        {
                            loading
                                ? 'Loading...'
                                : 'Signup'
                        }
                    </button>

                </form>

                <p
                    className="
    text-slate-400
    text-center
    mt-6
  "
                >

                    Already have an account?
                    {' '}

                    <Link

                        to="/login"

                        className="
      text-blue-400
      hover:underline
    "
                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Signup;