import { useCallback } from 'react'

export default function useLocalStorage() {
    const saveItem = useCallback((key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [])

    const getItem = useCallback((key: string) => {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }, [])

    const removeItem = useCallback((key: string) => {
        localStorage.removeItem(key)
    }, [])

    return { saveItem, getItem, removeItem }
}
