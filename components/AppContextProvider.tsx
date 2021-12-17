import React, { createContext, useState } from "react";

import { Character } from "../types";

interface AppContextProps {
    selectedCharacter?: Character;
    setSelectedCharacter: React.Dispatch<React.SetStateAction<Character | undefined>>;
}

export const AppContext = createContext<AppContextProps>({
    setSelectedCharacter: () => {
        throw new Error("not implemented");
    }
});

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character>();
    return <AppContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
