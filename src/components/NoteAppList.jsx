import React from 'react';
import NoteAppItem from './NoteAppItem';

function NoteAppList({ notes, onDelete, onArchive }) {
  return (
    <div className='notes-list'>
      {notes.length === 0 ? (
        <div className='notes-list__empty-message'>
          <p>Tidak ada catatan</p>
        </div>
      ) : (
        notes.map((note) => (
          <NoteAppItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))
      )}
    </div>
  );
}

export default NoteAppList;
