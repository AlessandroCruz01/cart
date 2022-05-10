import React, { createContext, useState, useContext } from "react";

const DEFAULT_VALUE = {
    count: [],
    setCount: () => {},
};

const CountContext = createContext(DEFAULT_VALUE);


export default function CountProvider({children}) {
    const [count, setCount] = useState([]);

    return (
        <CountContext.Provider
            value={{
                count,
                setCount
            }}
        >

            {children}

        </CountContext.Provider>
    );
}

export function useCount() {
    const context = useContext(CountContext);
    const { count, setCount } = context;
    return { count, setCount};
}