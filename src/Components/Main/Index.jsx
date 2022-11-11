import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from 'recharts'

export default function Index() {

    const [data, setData] = useState("");
    const [yearData, setYearData] = useState("");

   useEffect(()=>{
    let url = "https://countriesnow.space/api/v0.1/countries/population"
    axios
    .get(url)
    .then((responce)=>{
        let result = responce.data
        let year = responce.data
        console.log(year)
        setYearData([...result.data, setYearData])
        setData([...result.data, setData])

    })
   },[])

  //  console.log(data)

//   const data = [{country: 'india', USA: 4000, RSA: 2400, China: 2400, Japan:1400, India:8000}];

  const mystyle={
    background:"#fff",
    border:"1px solid black"
  }
    
  return (
    <div style={mystyle} >
        <h1 style={{color:"gray"}}>World Population <strong style={{color:"#1e1e1e"}}>Chart</strong></h1>
        
           
                <BarChart width={1200} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 2" />
                <XAxis dataKey="country" />
                <YAxis dataKey="year"/>
                <Tooltip />
                <Legend />
                <Bar datakey="populationCounts[0].value" fill="red" />
                <Bar datakey="populationCounts[0].year" fill="green" />
                </BarChart>    
       
    </div>
  )
}
