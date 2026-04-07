import React from 'react';

const PermissionGate = ({ permissions, requiredPermission, children }) => {
    const hasPermission = permissions.includes(requiredPermission);

    if (!hasPermission) {
        return <div>You do not have permission to view this content.</div>;
    }

    return <>{children}</>;
};

export default PermissionGate;