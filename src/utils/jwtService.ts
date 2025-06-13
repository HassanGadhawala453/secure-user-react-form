
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Simulate API calls - in real app, these would call your backend
export const jwtService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would validate against backend
    if (email === "user@example.com" && password === "password") {
      const mockToken = `mock.jwt.token.${Date.now()}`;
      const user: User = {
        id: "1",
        email,
        name: "John Doe"
      };
      
      return { token: mockToken, user };
    }
    
    throw new Error("Invalid credentials");
  },

  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock registration
    const mockToken = `mock.jwt.token.${Date.now()}`;
    const user: User = {
      id: Date.now().toString(),
      email,
      name
    };
    
    return { token: mockToken, user };
  },

  logout: () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user_data");
  },

  getStoredToken: (): string | null => {
    return localStorage.getItem("jwt_token");
  },

  getStoredUser: (): User | null => {
    const userData = localStorage.getItem("user_data");
    return userData ? JSON.parse(userData) : null;
  },

  storeAuth: (token: string, user: User) => {
    localStorage.setItem("jwt_token", token);
    localStorage.setItem("user_data", JSON.stringify(user));
  },

  isTokenValid: (token: string): boolean => {
    // Basic token validation - in real app, you'd verify with backend
    return token && token.startsWith("mock.jwt.token");
  }
};
