import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type BackgroundContextType = {
    background: string;
    changeBackground: (newBackground: string) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

interface BackgroundProviderProps {
    children: ReactNode;
}

export const useBackground = () => {
    const context = useContext(BackgroundContext);
    if (context === undefined) {
        throw new Error('useBackground must be used within a BackgroundProvider');
    }
    return context;
};

export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
    const [background, setBackground] = useState<string>('default-background-class');

    useEffect(() => {
        const savedBackground = localStorage.getItem('selectedBackground');
        if (savedBackground) {
            setBackground(savedBackground);
        }
    }, []);

    const changeBackground = (newBackground: string) => {
        localStorage.setItem('selectedBackground', newBackground);
        setBackground(newBackground);
    };

    return (
        <BackgroundContext.Provider value={{ background, changeBackground }}>
            {children}
        </BackgroundContext.Provider>
    );
};
