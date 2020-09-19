import React,{useState,useEffect} from 'react';
import Filter from '../../components/Filters';
import './style.css'
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from './chart-options';
import axios from 'axios';
import {buildBarSeries, getPlatformChartData,getGenderChartData} from './helpers'
type PieChartData={
    labels:string[],
    series:number[],
}
type BarChartData={
    x:string,
    y:number,
}

const initialPieData={
    labels:[],
    series:[],
}
const baseURL = "http://localhost:8080"; 

const Charts=()=>{

    const[barChartData,setBarChatData]= useState<BarChartData[]>([]);
    const[platformData, setPlatformData]=useState<PieChartData>(initialPieData);
    const[GenderData, setGenderData]=useState<PieChartData>(initialPieData);

    useEffect(()=>{
async function getData(){
const recordsResponse=await axios.get(`${baseURL}/records`);
const gamesResponse=await axios.get(`${baseURL}/games`);

const data = buildBarSeries(gamesResponse.data,recordsResponse.data.content);
setBarChatData(data);
const platformChartData=getPlatformChartData(recordsResponse.data.content);
setPlatformData(platformChartData);
const genderChartData=getGenderChartData(recordsResponse.data.content);
setGenderData(genderChartData);

}
getData();
    },[])
return(

    <div className="page-container">

    <Filter link="/records" linkText="Ver Tabelas"/>
    <div className="chart-container">
        <div className="top-related">
            <h1 className="top-related-title">
                Jogos Mais Votados
            </h1>

            <div className="games-container">
          <Chart options={barOptions}
          
          type="bar"
          width="900"
          height="650"
          series={[{data:barChartData}]}/>
            </div>
        </div>

        <div className="charts">
            <div className="platform-chart">
            <h2 className="chart-title">Plataforma</h2>
            <Chart options={{...pieOptions,labels:platformData?.labels}}
            type="donut"
            series={platformData?.series}
            width="350"
            />
            </div>
            
            <div className="gender-chart">
            <h2 className="chart-title">Gênero</h2>
            <Chart options={{...pieOptions,labels:GenderData?.labels}}
            type="donut"
            series={GenderData?.series}
            width="350"
            />
            </div>
            

        </div>
        
    </div>
    </div>
)

}

export default Charts;
