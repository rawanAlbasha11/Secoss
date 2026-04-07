import { useEffect, useState } from 'react';

const usePermission = (userPermissions, requiredPermissions) => {
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        const hasAllPermissions = requiredPermissions.every(permission =>
            userPermissions.includes(permission)
        );
        setHasPermission(hasAllPermissions);
    }, [userPermissions, requiredPermissions]);

    return hasPermission;
};

export default usePermission;