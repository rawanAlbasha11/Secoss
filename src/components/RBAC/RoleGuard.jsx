import React from 'react';
const RoleGuard = ({ children, requiredRoles = [], fallback = null }) => {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;
    if (!user) {
        return fallback || <div>يجب تسجيل الدخول أولاً</div>;
    }
    if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
        return fallback || <div>ليس لديك صلاحية للوصول إلى هذا المحتوى</div>;
    }
    return children;
};
export default RoleGuard;