import React, { useEffect } from 'react';
import { Recipe } from '../types';
import { CloseIcon } from './icons';

interface RecipeDetailModalProps {
    recipe: Recipe;
    onClose: () => void;
}

const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose }) => {
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="relative">
                    <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-64 object-cover rounded-t-xl" />
                    <button onClick={onClose} className="absolute top-4 right-4 bg-white/70 p-2 rounded-full text-gray-700 hover:bg-white hover:text-black transition">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto">
                    <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">{recipe.category}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">{recipe.name}</h2>
                    <p className="text-md text-gray-500 mt-2">
                        Publicado por: <span className="font-semibold text-gray-700">{recipe.authorName}</span>
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-semibold border-b-2 border-orange-300 pb-2 mb-3">Ingredientes</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {recipe.ingredients.map((ing, index) => (
                                    <li key={index}>{ing}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold border-b-2 border-orange-300 pb-2 mb-3">Instrucciones</h3>
                            <ol className="list-decimal list-inside space-y-4 text-gray-700">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index} className="pl-2">{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
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

export default RecipeDetailModal;