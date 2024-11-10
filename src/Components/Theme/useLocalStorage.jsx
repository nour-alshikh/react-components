import {useEffect, useState} from "react";

export default function useLocalStorage(key , defaultValue) {
    const [value, setValue] = useState(()=>{
        let currentValue
        try {

        currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))

        return currentValue;
        } catch (error) {
            console.log(error)
            currentValue = defaultValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key,value]);


    return [value , setValue]
}