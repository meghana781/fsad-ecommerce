// Mock authService for demonstration purposes
export const authService = {
    login: async (email, password) => {
        // Simulate an authentication response
        if (email === 'test@example.com' && password === 'password') {
            return { email, username: 'testuser' };
        } else {
            throw new Error('Invalid credentials');
        }
    }
};
