import React from 'react';
import PlaylistHeader from '../components/PlaylistHeader';
import PlaylistItems from '../components/PlaylistItems';
import NightMode from '../components/NightMode';


function Playlist() {
  return (
    <>
        <NightMode />
        <PlaylistHeader />
        <PlaylistItems />
    </>
  )
}

export default Playlist