import React from 'react';
import Header from '../components/header';
import Lists from '../components/lists';

const YoutubeList = (props) => {
    const handleSearch = (searchKeyword) => {
        console.log(searchKeyword);
    };
    
    return (
        <>
            <Header onSearch={handleSearch} />
            <Lists videos={props.videos} />
        </>
    );
}

export default YoutubeList;