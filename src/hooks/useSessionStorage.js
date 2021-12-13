import { useEffect, useState } from "react";

const useSessionStorage = (key) => {
    const [value, setValue] = useState(sessionStorage.getItem(key) || null);

    useEffect(() => {
        sessionStorage.setItem(key, value);        
    }, [value, key]);

    return {
        value, 
        setValue
    }
}

export default useSessionStorage;