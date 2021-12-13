import { useEffect, useState } from "react"

const useSessionStorage = (key) => {
    const [value, setValue] = useState(sessionStorage.getItem(key) || '');

    useEffect(() => {
        sessionStorage.setItem(key, value);
        console.log(sessionStorage);
    }, [value, key]);

    return {
        value, 
        setValue
    }
}

export default useSessionStorage;