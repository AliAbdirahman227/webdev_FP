import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

const EntryPage = ({ match, history }) => {

    let entryId = match.params.id
    let [entry, setEntry] = useState(null)

    useEffect(() => {
        getEntry()
    }, [entryId])


    let getEntry = async () => {
        if (entryId === 'new') return

        let response = await fetch(`/api/notes/${entryId}/`)
        let data = await response.json()
        setEntry(data)
    }

    let createEntry = async () => {
        fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        })
    }


    let updateEntry = async () => {
        fetch(`/api/notes/${entryId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        })
    }


    let deleteEntry = async () => {
        fetch(`/api/notes/${entryId}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        history.push('/note')
    }

    let handleSubmit = () => {
        console.log('NOTE:', entry)
        if (entryId !== 'new' && entry.body == '') {
            deleteEntry()
        } else if (entryId !== 'new') {
            updateEntry()
        } else if (entryId === 'new' && entry.body !== null) {
            createEntry()
        }
        history.push('/note')
    }

    let handleChange = (value) => {
        setEntry(entry => ({ ...entry, 'body': value }))
        console.log('Handle Change:', entry)
    }

    return (
        <div className="entry" >
            <div className="entry-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {entryId !== 'new' ? (
                    <button onClick={deleteEntry}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={entry?.body}></textarea>
        </div>
    )
}

export default EntryPage
