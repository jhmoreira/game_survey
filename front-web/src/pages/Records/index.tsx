import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './styles.css'
import { RecordResponse } from './types';
import {formatDate} from './helpers';
import Pagination from './Pagination';
import Filter from '../../components/Filters';
const baseURL = "http://localhost:8080";
const Records = () => {
    const [recordsResponse, setRecordsResponse] = useState<RecordResponse>();
const[activePage,setActivePage]=useState(0);
    useEffect(() => {
        axios.get(`${baseURL}/records?linesPerPage=12&page=${activePage}`)
            .then(response => setRecordsResponse(response.data));
    }, [activePage]);
 
    const handlePageChange= (index:number)=>{
        setActivePage(index)
    }
    return (

        <div className="page-container">
            <Filter link="/charts" linkText="Ver Tabelas"/>
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Instante</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Plataforma</th>
                        <th>Gênero</th>
                        <th>Titulo do Jogo</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (

                        <tr key={record.id}>

                            <td>{formatDate(record.moment)} </td>
                            <td> {record.name} </td>
                            <td>{record.age}  </td>
                            <td className="text-secondary"> {record.gamePlatform} </td>
                            <td> {record.genreName} </td>
                            <td className="text-primary"> {record.gameTitle} </td>

                        </tr>

                    ))}


                </tbody>
            </table>
            <Pagination
             activePage={activePage}
             goToPage={handlePageChange}
            totalPages={recordsResponse?.totalPages
           
            } />
        </div>




    );
};


export default Records;