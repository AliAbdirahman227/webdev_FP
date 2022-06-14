import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import { Link } from 'react-router-dom'
import schedule from './schedule'
import login from './Login'
import {
    HashRouter as Router,
    Route
  } from "react-router-dom";



const EntrysListPage = () => {

    let [entrys, setEntrys] = useState([])

    useEffect(() => {
        getEntrys()
    }, [])


    let getEntrys = async () => {

        let response = await fetch('/api/notes/')
        let data = await response.json()
        setEntrys(data)
    }

    return (
        <div className="entrys">
            
            <div className="entrys-header">
                <h2 className="entrys-title">&#9782; Diary Entry</h2>
                <p className="entrys-count">{entrys.length}</p>
                

                
            </div>

            <div className="entrys-list">
                {entrys.map((entry, index) => (
                    <ListItem key={index} entry={entry} />
                ))}
            </div>
            <Router>
                <div className="scheduler">                    
                    <Route path="/schedule" component={schedule} />
                    <Link to={`/schedule`} id="schd-btn">
                        <div className="schd-btn" >scheduler</div>
                    </Link>
                </div>
            </Router>
            <Router>
                <div className="log-out">                    
                    <Route path="/login" component={login} />
                    <Link to={`/login`} id="schd-btn">
                        <div className="signout" >sign-out</div>
                    </Link>
                </div>
            </Router>
            <AddButton />
            
            
        </div>
        
    )
}

export default EntrysListPage
