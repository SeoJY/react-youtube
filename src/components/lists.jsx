import React from 'react';
import ListItem from './listItem';

const Lists = ({ videos, onVideoClick, display }) => {
    return (
        <ul className={`video_lst ${display}`}>
            {videos.map(video => <ListItem video={video} key={video.id} onVideoClick={onVideoClick} display={display} />)}
        </ul>
    );
}

export default Lists;