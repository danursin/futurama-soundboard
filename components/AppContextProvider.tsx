import React, { createContext, useState } from "react";

import { Mode } from "../types";

interface AppContextProps {
    mode: Mode;
    setMode: (mode: Mode) => void;
}

export const AppContext = createContext<AppContextProps>({
    mode: "single",
    setMode: () => {
        throw new Error("not implemented");
    }
});

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<Mode>("single");
    return <AppContext.Provider value={{ mode, setMode }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
