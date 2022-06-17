import React, { useCallback, useEffect, useState } from 'react';
import DetailView from './components/detailView';
import Header from './components/header';
import Lists from './components/lists';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
      setLoading(true);
      youtube.search(query)
      .then(videos => {
        setVideos(videos);
        setLoading(false);
        setSelectedVideo(null);
        setSubTitle(`"${query}" Seach Result`);
      });
    }, [youtube]
  )

  useEffect(()=>{
    setLoading(true);
    youtube.mostPopular()
    .then(videos => {
      setVideos(videos);
      setLoading(false);
      setSubTitle('Most Popular Videos');
    })
  },[youtube])
  
  return (
    <div className="wrap">
        <Header onSearch={search} />
        {loading && (
          <div className="youtube_loader">
            <div className="loader">
              <div className="loader_icon"><div></div><div></div><div></div><div></div></div>
              <p>Now loading</p>
            </div>
          </div>
        )}
        <section className="youtube_content">
            {selectedVideo && (
              <div className="youtube_detail">
                <DetailView video={selectedVideo} />
              </div>
            )}
          <div className="youtube_list">
            <h2 className="youtube_list_title">{subTitle}</h2>
            <Lists videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid'} />
          </div>
        </section>
    </div>
  );
}

export default App;