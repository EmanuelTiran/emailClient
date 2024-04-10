import axios from "axios"



export const axiosReq = async ({ method = 'GET', body, url }) => {
   try {
      // axios.defaults.baseURL = 'http://localhost:4000/api/'
      console.log('api req 😘 \n', { url, method, body })
      
      const { data: result } = await axios({
         baseURL: 'http://localhost:5050/user/',
         method,
         data: body,
         url,
         headers: {
            Authorization: localStorage.token || ''
         }
      })
      
      console.log('api req result 🐱 \n', { result })
      
      
      return result
      
   } catch (error) {
      console.log("bla bla bla");
      console.log('api error 🤢 \n', { error })
      throw error.response?.data?.my  ? error.response?.data?.message || 'something went wrong' : 'something went wrong'
   }
}