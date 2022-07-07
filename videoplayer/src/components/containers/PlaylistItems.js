import React from 'react';
import PlaylistItem from '../../components/PlaylistItem';
import WithLink from '../hoc/withLink';
import StyledPlaylistItems from '../styles/StyledPlaylistitems';

const PlaylistItemWithLink = WithLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => {
  return (
    <StyledPlaylistItems>
        {videos.map((video, index) => (
            <PlaylistItemWithLink
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