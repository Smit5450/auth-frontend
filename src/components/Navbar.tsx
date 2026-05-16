import {
    useNavigate,
} from 'react-router-dom';

import {
    useAuth,
} from '../context/AuthContext';

function Navbar() {

    const {
        user,
        logout,
    } = useAuth();

    const navigate =
        useNavigate();

    const handleLogout = () => {

        logout();

        navigate('/login');
    };

    return (

        <nav
            className="
        bg-slate-800
        text-white
        px-6
        py-4
        flex
        items-center
        justify-between
        shadow-md
      "
        >

            <h1
                className="
          text-2xl
          font-bold
        "
            >
                Auth App
            </h1>

            <div
                className="
          flex
          items-center
          gap-4
        "
            >

        <span
            className="
            text-slate-300
          "
        >
          {user?.name}
        </span>

                <button
                    onClick={handleLogout}

                    className="
            bg-red-500
            hover:bg-red-600
            transition-all
            px-4
            py-2
            rounded-lg
            font-medium
          "
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;