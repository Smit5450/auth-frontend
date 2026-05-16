import {
    Navigate,
} from 'react-router-dom';
import {useAuth} from "../context/AuthContext.tsx";
import Loading from "../components/Loading.tsx";

interface Props {

    children:
        React.ReactNode;

}

function ProtectedRoute({
                            children,
                        }: Props) {

    // const token =
    //     localStorage.getItem(
    //         'token',
    //     );
    //
    // if (!token) {
    //
    //     return (
    //         <Navigate to="/login" />
    //     );
    // }

    const {
        user,
        loading,
    } = useAuth();

    if (loading) {

        return (
            <Loading />
        );
    }

    if (!user) {

        return (
            <Navigate to="/login" />
        );
    }


    return children;
}

export default ProtectedRoute;