import React, { useEffect, useRef } from 'react'

export function useOutsideClick(callback=()=>{}) {
    const ref = useRef()
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [callback])
    return ref
}