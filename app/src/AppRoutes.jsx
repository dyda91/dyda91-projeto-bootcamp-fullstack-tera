import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import LoginPage from "./Pages/LoginPage";
import UserPage from "./Pages/UserPage"
import { AuthProvider, AuthContext } from "./context/auth";




const AppRoutes = () => { 
  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext)

    if(loading) {
      return <div className="loading">Carregando...</div>
    }

    if(!authenticated) {
      return <Navigate to="/login" />;
    }

      return children;
  }
    return (
      <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route exact path="/login" element={<LoginPage />} />     
                <Route exact path="/profile" element={<Private><UserPage /></Private>} />             
            </Routes> 
          </AuthProvider>  
      </BrowserRouter>  
    );
  }
  
  

  export default AppRoutes;

