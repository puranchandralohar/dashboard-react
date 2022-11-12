import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from 'recharts'

export default function Index() {

    const [data, setData] = useState("");

   useEffect(()=>{
    let url = "https://dhis2-app-course.ifi.uio.no/api?page=2&pageSize=50"
    axios
    .get(url)
    .then((responce)=>{
        let result = responce.data.results
        setData([...result, setData])

    })
   },[])

   console.log(data)

  const mystyle={
    background:"#fff",
    border:"1px solid black"
  }
    
  return (
    <div style={mystyle} >
        <h1 style={{color:"gray"}}>World Population <strong style={{color:"#1e1e1e"}}>Chart</strong></h1>
          
        <BarChart width={780} height={250} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="Country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Population" fill="#8884d8" />
          <Bar dataKey="PopulationGrowth" fill="#82ca9d" />
        </BarChart>   

            
    </div>
  )
}
