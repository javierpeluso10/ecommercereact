import { useState, useEffect } from "react"

export const useAsync = (asyncFunc, dependencies = []) =>{
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    
    if(!Array.isArray(dependencies)){
        dependencies = []
    }

    useEffect(()=>{
        setLoading(true)

        asyncFunc().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally (()=> {
            setLoading(false)
        })
    }, dependencies)

    return{
        data,
        loading,
        error
    }
} 