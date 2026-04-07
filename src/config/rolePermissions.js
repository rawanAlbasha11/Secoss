const ROLE_PERMISSIONS = {
    admin: ['read', 'write', 'delete', 'manage'],
    user: ['read', 'write'],
    guest: ['read'],
};

module.exports = ROLE_PERMISSIONS;