import React, { useState, useEffect, useRef } from 'react';
import { Recipe } from '../types';
import { CloseIcon } from './icons';
import LoadingOverlay from './LoadingOverlay';

interface RecipeFormModalProps {
    recipe: Recipe | null;
    onClose: () => void;
    onSave: (recipe: Omit<Recipe, 'id' | 'userId' | 'authorName'>) => Promise<void>;
    isLoading: boolean;
    loadingMessage: string;
}

const RecipeFormModal: React.FC<RecipeFormModalProps> = ({ recipe, onClose, onSave, isLoading, loadingMessage }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (recipe) {
            setName(recipe.name);
            setCategory(recipe.category);
            setIngredients(recipe.ingredients.join('\n'));
            setInstructions(recipe.instructions.join('\n'));
            setImageUrl(recipe.imageUrl);
            setImagePreview(recipe.imageUrl);
        }
    }, [recipe]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setImageUrl(base64String);
                setImagePreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!imageUrl) {
            alert("Por favor, sube una imagen para la receta.");
            return;
        }
        const recipeData = {
            name,
            category,
            ingredients: ingredients.split('\n').filter(line => line.trim() !== ''),
            instructions: instructions.split('\n').filter(line => line.trim() !== ''),
            imageUrl,
        };
        onSave(recipeData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
            {isLoading && <LoadingOverlay message={loadingMessage} />}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <header className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{recipe ? 'Editar Receta' : 'Añadir Nueva Receta'}</h2>
                     <button onClick={onClose} className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>
                <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto p-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre de la Receta</label>
                        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"/>
                    </div>
                     <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
                        <input type="text" name="category" id="category" value={category} onChange={e => setCategory(e.target.value)} required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"/>
                    </div>
                     <div>
                        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredientes (uno por línea)</label>
                        <textarea name="ingredients" id="ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} rows={6} required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"></textarea>
                    </div>
                     <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instrucciones (un paso por línea)</label>
                        <textarea name="instructions" id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} rows={8} required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Imagen de la Receta</label>
                        <div className="mt-2 flex items-center gap-4">
                             {imagePreview && <img src={imagePreview} alt="Vista previa" className="w-24 h-24 object-cover rounded-md" />}
                            <input type="file" accept="image/png, image/jpeg" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                            <button type="button" onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium rounded-md shadow-sm hover:bg-gray-50">
                                Seleccionar Imagen
                            </button>
                        </div>
                    </div>
                </form>
                <footer className="p-6 border-t flex justify-end gap-4">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancelar</button>
                    <button type="submit" onClick={handleSubmit} disabled={isLoading} className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:bg-orange-300">
                        {isLoading ? 'Guardando...' : 'Guardar Receta'}
                    </button>
                </footer>
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

                @keyframes slide-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default RecipeFormModal;