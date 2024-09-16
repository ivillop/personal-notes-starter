import React from 'react';
import { getInitialData } from '../utils/index';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';

class PersonalNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      search: '',
      filteredNotes: [],
    };

    this.setQuery = this.setQuery.bind(this);
    this.setFilteredNotes = this.setFilteredNotes.bind(this);
  }

  setQuery(query) {
    this.setState({ search: query });
  }

  setFilteredNotes(filteredNotes) {
    this.setState({ filteredNotes });
  }

  render() {
    return (
      <>
        <NoteAppHeader
          search={this.state.search}
          setQuery={this.setQuery}
          notes={this.state.notes}
          setFilteredNotes={this.setFilteredNotes}
        />
        <NoteAppBody />
      </>
    );
  }
}

export default PersonalNotes;
