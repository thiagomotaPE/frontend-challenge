import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T | null>(null)
    
    useEffect(() => {
        if(typeof window === 'undefined') return;

        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        } else {
            setValue(initialValue);
        }
    }, [key]);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    }

    return {
        value,
        updateLocalStorage
    }
}