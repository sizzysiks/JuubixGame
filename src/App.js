import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import rankingsService from './services/rankingsService';
import './App.css';


import Level from './Components/Levels/Level';
import Menu from './Components/Menu/Menu';


const App = () => 
{
    // State for levels
    const [levels, setLevels] = useState([
    {
        name:"1",
        color:"#59C19C",
        locked:false,
        key:1
    },
    {
        name:"2",
        color:"#F98522",
        locked:true,
        key:2
    },
    {
        name:"3",
        color:"#07A6D0",
        locked:true,
        key:3
    },
    {
        name:"4",
        color:"#5260AB",
        locked:true,
        key:4
    },
    {
        name:"5",
        color:"#CADB2A",
        locked:true,
        key:5
    },
    {
        name:"6",
        color:"#CD57A2",
        locked:true,
        key:6
    },
    {
        name:"7",
        color:"#487536",
        locked:true,
        key:7
    },
    {
        name:"8",
        color:"#3B2774",
        locked:true,
        key:8
    },
    {
        name:"9",
        color:"#FFBF12",
        locked:true,
        key:9
    },
    {
        name:"10",
        color:"#4587C7",
        locked:true,
        key:10
    },
    {
        name:"11",
        color:"#EF5385",
        locked:true,
        key:11
    },
    {
        name:"12",
        color:"#EE1E28",
        locked:true,
        key:12
    },
    {
        name:"13",
        color:"#F59AA3",
        locked:true,
        key:13
    },
    {
        name:"14",
        color:"#3E59A9",
        locked:true,
        key:14
    },
    {
        name:"15",
        color:"#17A847",
        locked:true,
        key:15
    },
    {
        name:"16",
        color:"#A21A23",
        locked:true,
        key:16
    },
    {
        name:"17",
        color:"#F65824",
        locked:true,
        key:17
    },
    {
        name:"18",
        color:"#31429F",
        locked:true,
        key:18
    },
    ])
    // State for rankings
    const [rankings, setRankings] = useState([])
    const [sortedRankings, setSortedRankings] = useState([])


    // Fetch data for rankings and sort by total score
    useEffect(()=>
    {
        rankingsService.getAll()
        .then((response)=>{
            setRankings(response.data)

            setSortedRankings(response.data.sort((a,b)=>{
                return b.total - a.total
            }))
        })
    },[])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Menu levels={levels} />} />
                    <Route path='levels/:id' element={<Level levels={levels} rankings={sortedRankings} />} />
                </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App
