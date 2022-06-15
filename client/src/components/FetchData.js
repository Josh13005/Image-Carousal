import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url)
            console.log(request)
            setData(request.data)
            return request
        }
        fetchData()
    }, [url])

    return {data}
}

export default useFetch