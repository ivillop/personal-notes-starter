import React from 'react';
import { getInitialData } from '../utils';
import NoteAppForm from './NoteAppForm';
import NoteAppList from './NoteAppList';

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      search: '',
      filteredNotes: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const { notes, archivedNotes } = this.state;
    const updatedNotes = notes.filter((note) => note.id !== id);
    const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== id);

    this.setState({
      notes: updatedNotes,
      archivedNotes: updatedArchivedNotes,
    });
  }

  onArchiveHandler(id) {
    const { notes, archivedNotes } = this.state;
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });

    const noteToArchive = updatedNotes.find((note) => note.id === id);

    if (noteToArchive) {
      this.setState({
        notes: updatedNotes.filter((note) => note.id !== id),
        archivedNotes: [...archivedNotes, noteToArchive],
      });
    }
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            sarchived: false,
          },
        ],
      };
    });
  }

  searchArchivedNotes = (searchTerm) => {
    const { archivedNotes } = this.state;
    const filteredArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return filteredArchivedNotes;
  };

  render() {
    return (
      <div className='note-app__body'>
        <NoteAppForm addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteAppList
          notes={
            this.state.filteredNotes.length > 0
              ? this.state.filteredNotes
              : this.state.notes
          }
          search={this.state.search}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h2>Arsip</h2>
        <NoteAppList
          notes={
            this.state.search.length > 0
              ? this.searchArchivedNotes(this.state.search)
              : this.state.archivedNotes
          }
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}
export default NoteAppBody;
