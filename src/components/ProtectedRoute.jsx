import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function ProtectedRoute({ children }) {
    
    const token = localStorage.getItem('token')


    if (!token) {
    return <Navigate to="/login" />;
    }
    else{
        const decodedToken = jwtDecode(token)
        let currDate = Date.now();
        if(currDate > (decodedToken.exp * 1000)){
            console.log("Token caducado");
            localStorage.removeItem('token');
            return <Navigate to="/login" />;
        }else{
            console.log("Token aun valido")
            return children
        }
    }


}

export default ProtectedRoute;