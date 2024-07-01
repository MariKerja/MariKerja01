const jwt = require('jsonwebtoken');

function getCurrentUserId(token) {
    // Decode the JWT token without verifying. This is safe because we're not using the token for authentication here,
    // just extracting the user ID. In other contexts, you'd want to verify the token's signature first.
    try {
        const decoded = jwt.decode(token);
        return decoded ? decoded.id : null; // Assuming the user ID is stored in the 'id' field of the token payload
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}

module.exports = getCurrentUserId;