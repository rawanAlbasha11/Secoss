// rbacUtils.js

// Check if a user has a specific permission
function hasPermission(userPermissions, permission) {
    return userPermissions.includes(permission);
}

// Check if a user has a specific role
function hasRole(userRoles, role) {
    return userRoles.includes(role);
}

// Example usage:
// const userPermissions = ['read', 'write'];
// const userRoles = ['admin'];
// console.log(hasPermission(userPermissions, 'write')); // true
// console.log(hasRole(userRoles, 'admin')); // true

module.exports = {
    hasPermission,
    hasRole,
};