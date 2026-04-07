'use strict';

/**
 * Utility functions for localStorage operations.
 */

/**
 * Store an item in localStorage.
 * @param {string} key - The key to store the item under.
 * @param {any} value - The value to store.
 */
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieve an item from localStorage.
 * @param {string} key - The key of the item to retrieve.
 * @returns {any} The retrieved value or null if not found.
 */
function getItem(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

/**
 * Remove an item from localStorage.
 * @param {string} key - The key of the item to remove.
 */
function removeItem(key) {
    localStorage.removeItem(key);
}

/**
 * Clear all user data from localStorage.
 */
function clearUserData() {
    localStorage.clear();
}

// Exporting functions for use in other modules.
export { setItem, getItem, removeItem, clearUserData };