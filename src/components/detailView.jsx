import React from 'react';

function DetailView({ video }) {
    return (
        <div className="view_detail">
            <div className="view_video">
                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    title={video.snippet.title}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="view_info">
                <h2 className="view_title">{video.snippet.title}</h2>
                <p className="view_channel">{video.snippet.channelTitle}</p>
                <pre className="view_desc">{video.snippet.description}</pre>
            </div>
        </div>
    );
}

export default DetailView;