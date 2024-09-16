import React from 'react';
import NoteAppItemBody from './NoteAppItemBody';
import NoteAppDelete from './NoteAppDelete';
import NoteAppArchive from './NoteAppArchive';

function NoteAppItem({
  title,
  body,
  createdAt,
  id,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <NoteAppItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className='note-item__action'>
        <NoteAppDelete id={id} onDelete={onDelete} />
        <NoteAppArchive id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}

export default NoteAppItem;
