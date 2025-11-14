import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Recipe, User } from './types';
import * as authService from './services/authService';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeCard from './components/RecipeCard';
import RecipeDetailModal from './components/RecipeDetailModal';
import AuthModal from './components/AuthModal';
import LoadingOverlay from './components/LoadingOverlay';
import RecipeFormModal from './components/RecipeFormModal';
import { mockRecipes } from './services/mockData';

const App: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadingMessage, setLoadingMessage] = useState<string>('Cargando...');
    const [error, setError] = useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [authModalState, setAuthModalState] = useState<{isOpen: boolean; view: 'login' | 'signup'}>({isOpen: false, view: 'login'});
    const [isRecipeFormOpen, setIsRecipeFormOpen] = useState(false);
    const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }

        try {
            setError(null);
            setRecipes(mockRecipes);
        } catch (err) {
            console.error(err);
            setError('No se pudieron cargar las recetas de ejemplo.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const categories = useMemo(() => {
        const uniqueCategories = new Set(recipes.map(r => r.category));
        const defaultCategories = new Set(['Entrantes', 'Platos Principales', 'Postres', 'Sopas']);
        const combined = new Set([...defaultCategories, ...uniqueCategories]);
        
        const sortedCategories = Array.from(combined).sort();
        return ['all', ...sortedCategories.filter(c => c !== 'all')];
    }, [recipes]);


    const filteredRecipes = useMemo(() => {
        return recipes.filter(recipe => {
            const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
            const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        }).sort((a, b) => a.name.localeCompare(b.name));
    }, [recipes, searchTerm, selectedCategory]);

    const handleSelectRecipe = useCallback((recipe: Recipe) => {
        setSelectedRecipe(recipe);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedRecipe(null);
    }, []);

    const handleOpenAuthModal = useCallback((view: 'login' | 'signup') => {
        setAuthModalState({isOpen: true, view});
    }, []);
    const handleCloseAuthModal = useCallback(() => {
        setAuthModalState({isOpen: false, view: 'login'});
    }, []);


    const handleLogin = (user: User) => {
        setCurrentUser(user);
        handleCloseAuthModal();
    };

    const handleLogout = () => {
        authService.logout();
        setCurrentUser(null);
    };



    const handleOpenRecipeForm = useCallback((recipe: Recipe | null) => {
        if (!currentUser) {
            alert("Debes iniciar sesión para crear o editar recetas.");
            return;
        }
        setEditingRecipe(recipe);
        setIsRecipeFormOpen(true);
    }, [currentUser]);

    const handleCloseRecipeForm = useCallback(() => {
        setEditingRecipe(null);
        setIsRecipeFormOpen(false);
    }, []);

    const handleSaveRecipe = async (recipeData: Omit<Recipe, 'id' | 'userId' | 'authorName'>) => {
        if (!currentUser) return;
        
        setIsLoading(true);
        setLoadingMessage('Guardando receta...');
        try {
            // Simular una pequeña demora para que el usuario vea el feedback
            await new Promise(res => setTimeout(res, 500));

            if (editingRecipe) { // Update
                const updatedRecipe: Recipe = { ...editingRecipe, ...recipeData };
                setRecipes(recipes.map(r => r.id === editingRecipe.id ? updatedRecipe : r));
            } else { // Create
                const newRecipe: Recipe = {
                    ...recipeData,
                    id: Date.now(),
                    userId: currentUser.id,
                    authorName: currentUser.username,
                };
                setRecipes(prev => [newRecipe, ...prev]);
            }
            handleCloseRecipeForm();
        } catch (err) {
            console.error("Failed to save recipe", err);
            setError("No se pudo guardar la receta.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleDeleteRecipe = useCallback((recipeId: number) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta receta?')) {
            setRecipes(prev => prev.filter(r => r.id !== recipeId));
        }
    }, []);

    return (
        <>
            {(isLoading && !isRecipeFormOpen) && <LoadingOverlay message={loadingMessage} />}
            <div className="flex flex-col min-h-screen bg-orange-50/50 text-gray-800">
                <Header
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    categories={categories}
                    currentUser={currentUser}
                    onAuthClick={handleOpenAuthModal}
                    onLogout={handleLogout}
                    onAddRecipe={() => handleOpenRecipeForm(null)}
                />
                
                <main className="flex-grow container mx-auto px-4 py-8">
                    {error ? (
                        <div className="text-center text-red-500 text-xl bg-red-100 p-6 rounded-lg">
                            <p>{error}</p>
                        </div>
                    ) : (
                        <>
                            {filteredRecipes.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {filteredRecipes.map(recipe => (
                                        <RecipeCard 
                                            key={recipe.id} 
                                            recipe={recipe} 
                                            onSelect={handleSelectRecipe}
                                            currentUser={currentUser}
                                            onEdit={handleOpenRecipeForm}
                                            onDelete={handleDeleteRecipe}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 text-xl mt-16">
                                    <p>No se encontraron recetas con esos criterios.</p>
                                    <p className="text-base mt-2">Intenta cambiar el filtro o el término de búsqueda.</p>
                                </div>
                            )}
                        </>
                    )}
                </main>

                <Footer />

                {selectedRecipe && <RecipeDetailModal recipe={selectedRecipe} onClose={handleCloseModal} />}
                {authModalState.isOpen && <AuthModal initialView={authModalState.view} onClose={handleCloseAuthModal} onLoginSuccess={handleLogin} />}
                {isRecipeFormOpen && <RecipeFormModal onClose={handleCloseRecipeForm} onSave={handleSaveRecipe} recipe={editingRecipe} isLoading={isLoading} loadingMessage={loadingMessage}/>}
            </div>
        </>
    );
};

export default App;