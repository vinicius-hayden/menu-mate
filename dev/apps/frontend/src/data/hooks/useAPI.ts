import { useCallback } from 'react'

const urlBase = process.env.NEXT_PUBLIC_API_URL

export default function useAPI() {
    const httpGet = useCallback(async function (path: string) {
        const uri = path.startsWith('/') ? path : `/${path}` 
        const completeUrl = `${urlBase}${uri}`
        
        const response = await fetch(completeUrl)
        return 

    }) 
}