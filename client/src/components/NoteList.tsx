import React from 'react'
import { NoteListItem } from './NoteListItem'

export const NoteList: React.FC = () => {
    return (
        <div className="w-full p-4 mt-4 bg-white divide-y divide-gray-200 rounded-lg shadow-lg">
            <NoteListItem />
            <NoteListItem />
            <NoteListItem />
        </div>
    )
}
