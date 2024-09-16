import React from 'react';

function NoteAppSearch({ search, setQuery, notes, setFilteredNotes }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);

    const filteredNote = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm),
    );
    setFilteredNotes(filteredNote);
  };

  return (
    <div className='note-search'>
      <input
        type='search'
        placeholder='Cari catatan ...'
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default NoteAppSearch;
