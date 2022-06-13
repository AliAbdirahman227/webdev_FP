import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (entry) => {
    return new Date(entry.updated).toLocaleDateString()
}

let getTitle = (entry) => {

    let title = entry.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}


let getContent = (entry) => {
    let title = getTitle(entry)
    let content = entry.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }
}


const ListItem = ({ entry }) => {
    return (
        <Link to={`/note/${entry.id}`}>
            <div className="entrys-list-item" >
                <h3>{getTitle(entry)}</h3>
                <p><span>{getTime(entry)}</span>{getContent(entry)}</p>
            </div>

        </Link>
    )
}

export default ListItem
