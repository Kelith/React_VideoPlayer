import React from 'react';
import PlaylistHeader from '../../components/PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import Nightmode from '../../components/Nightmode';


function Playlist() {
  return (
    <>
        <Nightmode />
        <PlaylistHeader />
        <PlaylistItems />
    </>
  )
}

export default Playlist