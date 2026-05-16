
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ProtectedRoute from "./routes/protectedRoutes.tsx";
import PublicRoute from "./routes/publicRoute.tsx";

function App() {

  return (
      <Routes>

        <Route
            path="/login"
            element={
            <PublicRoute>
             <Login />
            </PublicRoute>
        }
        />

        <Route
            path="/signup"
            element={
            <PublicRoute>
                <Signup />
            </PublicRoute>
        }
        />

        <Route
            path="/"
            element={
            <ProtectedRoute>
                 <Dashboard />
            </ProtectedRoute>
        }
        />


      </Routes>
  )
}

export default App
