import React from 'react';
import PlaylistItem from '../../components/PlaylistItem';
import StyledPlaylistItems from '../styles/StyledPlaylistitems';

function PlaylistItems({ videos, active }) {
  return (
    <StyledPlaylistItems>
        {videos.map((video, index) => (
            <PlaylistItem
                key={index}
                video={video}
                active={video.id === active.id ? true : false}
                played={video.played}
            />
        ))}
    </StyledPlaylistItems>
  )
}

export default PlaylistItems