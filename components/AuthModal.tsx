import React, { useState, useEffect } from 'react';
import { CloseIcon, UserCircleIcon } from './icons';
import * as authService from '../services/authService';
import { User } from '../types';

interface AuthModalProps {
    onClose: () => void;
    onLoginSuccess: (user: User) => void;
    initialView: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLoginSuccess, initialView }) => {
    const [isLoginView, setIsLoginView] = useState(initialView === 'login');
    const [error, setError] = useState('');

    // Common fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Signup specific fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');


    useEffect(() => {
        setIsLoginView(initialView === 'login');
    }, [initialView]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);
    
    const resetForm = () => {
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setBirthDate('');
        setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (isLoginView) {
            const result = authService.login(username, password);
            if (result.success && result.user) {
                onLoginSuccess(result.user);
            } else {
                setError(result.message);
            }
        } else {
            const result = authService.register({ username, password, firstName, lastName, birthDate });
            if (result.success && result.user) {
                onLoginSuccess(result.user);
            } else {
                setError(result.message);
            }
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        resetForm();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:bg-gray-100 transition">
                    <CloseIcon className="w-5 h-5" />
                </button>
                
                <div className="flex flex-col items-center text-center">
                    <UserCircleIcon className="w-20 h-20 text-orange-500" />
                    <h2 className="text-2xl font-bold mt-4">
                        {isLoginView ? 'Iniciar Sesión' : 'Crear Cuenta'}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4 text-left">
                        
                        {!isLoginView && (
                             <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName-auth" className="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input type="text" id="firstName-auth" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName-auth" className="block text-sm font-medium text-gray-700">Apellidos</label>
                                        <input type="text" id="lastName-auth" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" required/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="birthDate-auth" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                                    <input type="date" id="birthDate-auth" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" required/>
                                </div>
                            </>
                        )}
                        
                        <div>
                            <label htmlFor="username-auth" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                            <input type="text" id="username-auth" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" required/>
                        </div>
                        <div>
                            <label htmlFor="password-auth" className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input type="password" id="password-auth" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" required/>
                        </div>

                        {error && <p className="text-red-500 text-sm text-center pt-2">{error}</p>}
                        
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white py-2.5 px-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold mt-4"
                        >
                            {isLoginView ? 'Iniciar Sesión' : 'Registrarse'}
                        </button>
                    </form>
                    
                    <p className="mt-6 text-sm text-gray-600">
                        {isLoginView ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                        <button onClick={toggleView} className="font-semibold text-orange-600 hover:underline ml-1">
                            {isLoginView ? 'Regístrate' : 'Inicia Sesión'}
                        </button>
                    </p>
                </div>
            </div>
             <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default AuthModal;
