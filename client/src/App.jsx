import React,{useState,useEffect} from 'react'
require('dotenv').config()
const App = () => {
  const [youtubeCTA, setYoutubeCTA]=useState({})

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const resp=await fetch(process.env.localurl)
        if(!resp.ok)
          throw new Error(`HTTP error! status:${resp.status}`)
        const data = await resp.json()
        console.log(data)
        setYoutubeCTA(data)
      }
      catch(error){
        console.error(`Error fetching data: ${error.message}`)
      }
    }
    fetchData()
  },[])

  return (
    <div>
      <h1>
        {youtubeCTA.Like}
      </h1>
      <h1>
        {youtubeCTA.Subscribe}
      </h1>
    </div>
  )
}

export default App