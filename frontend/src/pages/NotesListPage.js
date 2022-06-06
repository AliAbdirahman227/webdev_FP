import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import { Link } from 'react-router-dom'
import schedule from './schedule'
import {
    HashRouter as Router,
    Route
  } from "react-router-dom";


const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])


    let getNotes = async () => {

        let response = await fetch('/api/notes/')
        let data = await response.json()
        setNotes(data)
    }

    return (
        <div className="notes">
            
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
                
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
            <AddButton />
            <Router>
                <div className="scheduler">                    
                    <Route path="/schedule" component={schedule} />
                    <Link to={`/schedule`}>
                        <div className="notes-header" >scheduler</div>
                    </Link>
                </div>
            </Router>
        </div>
        
    )
}

export default NotesListPage
