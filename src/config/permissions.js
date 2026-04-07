const PERMISSIONS = {
    // User roles
    roles: {
        ADMIN: 'admin',
        USER: 'user',
        GUEST: 'guest',
    },

    // Feature permissions
    features: {
        ACCESS_DASHBOARD: {
            requiredRole: 'user',
            description: 'Permission to access the dashboard'
        },
        MANAGE_USERS: {
            requiredRole: 'admin',
            description: 'Permission to manage user accounts'
        },
        VIEW_REPORTS: {
            requiredRole: 'user',
            description: 'Permission to view reports'
        },
        EDIT_SETTINGS: {
            requiredRole: 'admin',
            description: 'Permission to edit application settings'
        },
        DELETE_DATA: {
            requiredRole: 'admin',
            description: 'Permission to delete data'
        }
    },

    // Function to check permission
    checkPermission(role, feature) {
        const permission = this.features[feature];
        if (!permission) {
            throw new Error('Feature not found');
        }
        return role === permission.requiredRole || role === this.roles.ADMIN;
    }
};

module.exports = PERMISSIONS;