import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
    const [infoApi, setinfoApi] = useState()
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(false)

    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        setLoading(true)
        axios.get(url)
            .then(res => {
                setinfoApi(res.data)
                setIsError(false)
            })
            .catch(err => {
                console.log(err)
                setIsError(true)
            })
            .finally( () => setLoading(false))
    }

    // CREATE USER => post api 

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        setLoading(true)
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }


    return [infoApi, getApi, isError, loading, postApi]
}

export default useFetch