import { useState } from 'react';

import axios from 'axios';

import { login }
    from '../services/authService';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.tsx";

function Login() {

    const [email, setEmail] =
        useState('');

    const [password, setPassword] =
        useState('');

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState('');

    const navigate =
        useNavigate();

    const { login: loginUser } =
        useAuth();

    const handleLogin = async (
        e: React.FormEvent,
    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            setError('');

            const data =
                await login({

                    email,
                    password,

                });

            // localStorage.setItem(
            //     'token',
            //     data.token,
            // );
            //
            // localStorage.setItem(
            //     'user',
            //     JSON.stringify(data.user),
            // );

            loginUser(
                data.token,
                data.user,
            );

            navigate('/');

        } catch (error) {

            if (
                axios.isAxiosError(error)
            ) {

                setError(

                    error.response?.data
                        ?.message ||

                    'Login failed',
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
                    Login
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

                <form
                    onSubmit={handleLogin}

                    className="space-y-5"
                >

                    <input
                        type="email"
                        placeholder="Email"

                        value={email}

                        onChange={(e) =>
                            setEmail(
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

                        disabled={loading}

                        className="
              w-full
              bg-blue-500
              hover:bg-blue-600
              transition-all
              py-3
              rounded-xl
              font-semibold
              text-white
              disabled:opacity-50
            "
                    >

                        {
                            loading
                                ? 'Loading...'
                                : 'Login'
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

                    Don't have an account?
                    {' '}

                    <Link

                        to="/signup"

                        className="
      text-blue-400
      hover:underline
    "
                    >

                        Sign up

                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;