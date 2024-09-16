import React from 'react';

function NoteAppArchive({ id, onArchive, archived }) {
  const isArchived = archived !== undefined ? archived : false;

  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      {isArchived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

export default NoteAppArchive;
