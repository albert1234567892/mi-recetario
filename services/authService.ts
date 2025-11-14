import { User } from '../types';

const USERS_KEY = 'recipe_app_users';
const CURRENT_USER_KEY = 'recipe_app_current_user';

interface StoredUser extends User {
    password?: string;
}

// Helper to get users from localStorage
const getUsers = (): StoredUser[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
};

// Helper to save users to localStorage
const saveUsers = (users: StoredUser[]): void => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const register = (
    userData: Omit<User, 'id' | 'isAdmin'> & { password?: string }
): { success: boolean; message: string; user?: User } => {
    const { username, password, firstName, lastName, birthDate } = userData;
    if (!username || !password) {
        return { success: false, message: 'El usuario y la contraseña son obligatorios.' };
    }

    if (username.toLowerCase() === 'admin') {
        return { success: false, message: 'Este nombre de usuario está reservado.' };
    }

    const users = getUsers();
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
        return { success: false, message: 'El nombre de usuario ya existe.' };
    }

    const newUser: StoredUser = {
        id: Date.now(),
        username,
        password, // In a real app, this should be hashed!
        firstName,
        lastName,
        birthDate,
    };

    users.push(newUser);
    saveUsers(users);
    
    const { password: _, ...userToReturn } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userToReturn));

    return { success: true, message: 'Registro exitoso.', user: userToReturn };
};

export const login = (username: string, password: string): { success: boolean; message: string; user?: User } => {
    // Hardcoded admin user
    if (username.toLowerCase() === 'admin' && password === 'admin') {
        const adminUser: User = { id: 0, username: 'admin', isAdmin: true };
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(adminUser));
        return { success: true, message: 'Inicio de sesión de administrador exitoso.', user: adminUser };
    }
    
    const users = getUsers();
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

    if (user) {
        const { password: _, ...userToReturn } = user;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userToReturn));
        return { success: true, message: 'Inicio de sesión exitoso.', user: userToReturn };
    }

    return { success: false, message: 'Usuario o contraseña incorrectos.' };
};

export const logout = (): void => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = (): User | null => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
};
