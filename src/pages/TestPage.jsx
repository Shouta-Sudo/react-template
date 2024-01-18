import React, { useEffect } from 'react'
import axios from 'axios'

const TestPage = () => {
    useEffect(() => {
        // const res = await axios.get('http://127.0.0.1:8000/api/test')
        const fetchData = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/test')
            console.log(res.data)
        }
        fetchData()
    }, [])
    return (
        <div>TestPage</div>
    )
}

export default TestPage