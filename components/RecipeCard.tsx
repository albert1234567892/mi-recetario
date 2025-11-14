import React from 'react';
import { Recipe, User } from '../types';
import { PencilIcon, TrashIcon } from './icons';

interface RecipeCardProps {
    recipe: Recipe;
    onSelect: (recipe: Recipe) => void;
    currentUser: User | null;
    onEdit: (recipe: Recipe) => void;
    onDelete: (recipeId: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect, currentUser, onEdit, onDelete }) => {
    
    const canModify = currentUser && (currentUser.id === recipe.userId || !!currentUser.isAdmin);

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        onEdit(recipe);
    };
    
    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete(recipe.id);
    };

    return (
        <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col group relative cursor-pointer"
            onClick={() => onSelect(recipe)}
        >
            {canModify && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button onClick={handleEdit} className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                        <PencilIcon className="w-6 h-6" />
                        <span className="sr-only">Editar</span>
                    </button>
                    <button onClick={handleDelete} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                        <TrashIcon className="w-6 h-6" />
                        <span className="sr-only">Eliminar</span>
                    </button>
                </div>
            )}
            <div className="w-full h-48 bg-gray-200">
                {recipe.imageUrl ? (
                    <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Cargando imagen...</div>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">{recipe.category}</span>
                <h3 className="text-lg font-semibold mt-1 flex-grow">{recipe.name}</h3>
                <div className="text-xs text-gray-500 mt-2">
                    Por: <span className="font-medium">{recipe.authorName}</span>
                </div>
                <div 
                    className="mt-4 self-start text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
                >
                    Ver Receta &rarr;
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;