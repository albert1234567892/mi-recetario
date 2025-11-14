import React from 'react';
import { SearchIcon, UserCircleIcon, PlusIcon } from './icons';
import { User } from '../types';

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    categories: string[];
    currentUser: User | null;
    onAuthClick: (view: 'login' | 'signup') => void;
    onLogout: () => void;
    onAddRecipe: () => void;
}

const Header: React.FC<HeaderProps> = ({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    categories,
    currentUser,
    onAuthClick,
    onLogout,
    onAddRecipe
}) => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-orange-600">Mi Recetario</h1>
                        <p className="text-sm text-gray-500">Tu libro de cocina inteligente</p>
                    </div>
                    <div className="flex items-center gap-4">
                         {currentUser ? (
                            <>
                                <span className="text-gray-700 hidden sm:block">¡Hola, <span className="font-semibold">{currentUser.username}</span>!</span>
                                <button 
                                    onClick={onAddRecipe}
                                    className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
                                >
                                    <PlusIcon className="w-5 h-5" />
                                    <span className="font-medium hidden sm:block">Añadir Receta</span>
                                </button>
                                <button
                                    onClick={onLogout}
                                    className="text-sm font-medium text-gray-600 hover:text-orange-600"
                                >
                                    Cerrar Sesión
                                </button>
                            </>
                         ) : (
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => onAuthClick('login')} 
                                    className="font-medium text-gray-600 hover:text-orange-600 px-4 py-2 rounded-full transition-colors duration-200"
                                >
                                    Iniciar Sesión
                                </button>
                                <button 
                                    onClick={() => onAuthClick('signup')} 
                                    className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200 font-medium"
                                >
                                    Registrarse
                                </button>
                            </div>
                         )}
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Buscar recetas por nombre o ingrediente..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                             <SearchIcon className="w-5 h-5" />
                        </div>
                    </div>
                     <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                           <button 
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                    selectedCategory === cat 
                                    ? 'bg-orange-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
                                }`}
                            >
                                {cat === 'all' ? 'Todas' : cat}
                           </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;