import React, { memo } from 'react';

const ListItem = memo(({ video, onVideoClick, display}) => {
    const displayType = display === 'list' ? 'list' : 'grid';
    return (
        <li className={`video_item ${displayType}`}>
            <a href="#" className="video_item_inner" onClick={() => onVideoClick(video)}>
                <div className="video_thumb">
                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                </div>
                <div className="video_info">
                    <strong className="video_title">{video.snippet.title}</strong>
                    <span className="video_channel">{video.snippet.channelTitle}</span>
                </div>
            </a>
        </li>
    );
})

export default ListItem;