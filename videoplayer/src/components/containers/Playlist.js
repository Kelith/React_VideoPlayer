import React from 'react';
import PlaylistHeader from '../../components/PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import Nightmode from '../../components/Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

function Playlist({ videos, active, nightModeCallback, nightMode }) {
  return (
    <StyledPlaylist>
        <Nightmode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
        <PlaylistHeader active={active} total={videos.length} />
        <PlaylistItems video={videos} active={active} />
    </StyledPlaylist>
  )
}

export default Playlist