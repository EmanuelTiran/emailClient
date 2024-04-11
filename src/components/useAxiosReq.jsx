import { useEffect, useState } from 'react'
import { axiosReq } from './AxiosReq'

export default function useAxiosReq({ defaultVal, method, url, body }) {
   const [data, setData] = useState(defaultVal)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')
   
   
   console.log("bla bla bla");
   const fetchData = async () => {
      setData([])
      setLoading(true)
      try {

         const result = await axiosReq({ method, url, body })
         setData(result)
      } catch (e) {
         setError(e)
      } finally {
         setLoading(false)
      }
   }
   useEffect(() => { fetchData() }, [url])

   return { data, loading, error , fetchData}
}
