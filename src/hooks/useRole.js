import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the path accordingly

const useRole = (requiredRole) => {
    const { user } = useContext(AuthContext);
    
    if (!user || !user.roles) {
        return false;
    }

    return user.roles.includes(requiredRole);
};

export default useRole;
