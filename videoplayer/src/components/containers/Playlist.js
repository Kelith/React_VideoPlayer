import React from 'react';
import PlaylistHeader from '../../components/PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import Nightmode from '../../components/Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

function Playlist() {
  return (
    <StyledPlaylist>
        <Nightmode />
        <PlaylistHeader />
        <PlaylistItems />
    </StyledPlaylist>
  )
}

export default Playlist