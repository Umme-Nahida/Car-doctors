import axios from "axios"

export const clearCookie= async()=>{
   const {data}= await axios.post('http://localhost:8000/logOut',{ withCredentials: true })
   console.log(data)
   return data
}