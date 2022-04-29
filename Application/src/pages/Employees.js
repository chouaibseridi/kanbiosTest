import Logo from "../components/logo";
import Employeeslist from "../components/employeeslist";
import SearchBar from "../components/search_bar";
import Logout from "../components/logout";

import axios from 'axios';
import { useState, useEffect } from 'react';


function Employees () {
    const[data, setData] = useState([]);
    const[filteredData, setFilteredData] = useState([]);
    const[searchValue, setSearchValue] = useState(null);

    const populate = () => {
        const uploadOptions = {
            url: 'http://localhost:5000/upload', 
            method: 'POST',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } 
        }
        axios
        .request(uploadOptions)
        .then((res) => { setData(res.data); setFilteredData(res.data);})
    }

    const eraseData = () => {
        const options = {
            url: 'http://localhost:5000/deletealldata', 
            method: 'GET',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } 
        }
        axios
        .request(options)
        .then(() => { setData([]); setFilteredData([]) })
    }

    useEffect(() => {
        const options = {
            url: 'http://localhost:5000/employees', 
            method: 'GET',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } 
        }
        axios
            .request(options)
            .then((res) => { setData(res.data); setFilteredData(res.data);})
    },[]);

    return(
        <div className="employees-page">
            <Logout />
            <Logo />
            <SearchBar data={data} setFilteredData={setFilteredData} setSearchValue={setSearchValue} />
            {filteredData.length !== data.length && 
                <p className="searchResultCount">
                    <b>{filteredData.length}</b> results for your search "{searchValue}"
                </p>
            }
            { data.length > 0 &&
                <div> 
                    <Employeeslist employees = {filteredData} /> 
                    <button className="eraseData-btn" onClick={eraseData}>Erase Data</button>
                </div>
            }
            { data.length === 0 && 
                <div className="populate-msg">
                    <p> Your employee table is empty, click on <b>Populate</b> button below to upload data from excel file.</p>
                    <button onClick={populate}>Populate</button> 
                </div>
            }
        </div>
    )
}

export default Employees;