import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow-inner mt-12 py-6">
            <div className="container mx-auto px-4 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Mi Recetario. Todos los derechos reservados.</p>
                <p className="text-sm mt-2">
                    Creado por: Albert Paradell, Sergi Lara, Pau Camara, Victor Hidalgo i Saul Rodriguez
                </p>
            </div>
        </footer>
    );
};

export default Footer;