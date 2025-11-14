export interface User {
    id: number;
    username: string;
    isAdmin?: boolean;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
}

export interface Recipe {
    id: number;
    name: string;
    category: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    userId: number;
    authorName: string;
}