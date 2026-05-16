// import {
//     useNavigate,
// } from 'react-router-dom';

import {
    useAuth,
} from '../context/AuthContext';
import Navbar from "../components/Navbar.tsx";

function Dashboard() {

    const {
        user,
        // logout,
    } = useAuth();

    // const navigate =
    //     useNavigate();

    // const handleLogout = () => {
    //
    //     logout();
    //
    //     navigate('/login');
    // };

    return (

        <div
            className="
        min-h-screen
        bg-slate-900
        text-white
      "
        >

            <Navbar />

        <div
            className="
        flex
        flex-col
        items-center
        justify-center
        gap-6
        mt-24
      "
        >

            <h1
                className="
          text-4xl
          font-bold
        "
            >
                Welcome,
                {' '}
                {user?.name}
                👋
            </h1>

            <p
                className="
          text-slate-300
          text-lg
        "
            >
                {user?.email}
            </p>

        </div>
        </div>
    );
}

export default Dashboard;