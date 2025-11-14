
import React from 'react';

interface LoadingOverlayProps {
    message: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message }) => {
    return (
        <div className="fixed inset-0 bg-orange-50/90 z-50 flex flex-col justify-center items-center text-center p-4">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mb-4"></div>
            <h2 className="text-2xl font-semibold text-orange-700">Cargando Recetas...</h2>
            <p className="text-orange-600 mt-2">{message}</p>
            <style>{`
                .loader {
                    border-top-color: #f97316;
                    animation: spinner 1.5s linear infinite;
                }
                @keyframes spinner {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default LoadingOverlay;
