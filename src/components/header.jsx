import React, { memo, useRef } from 'react';

const Header = memo(({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const searchKeyword = inputRef.current.value;
        searchKeyword && onSearch(searchKeyword);
    }

    const onClick = () => {
        handleSearch();
    }

    const onKeyPress = event => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="header">
            <h1 className="header_logo"><a href="./">YouTube</a></h1>
            <div className="header_search">
                <input ref={inputRef} type="text" placeholder="검색어를 입력하세요" onKeyPress={onKeyPress} />
                <button type="button" className="btn_search" onClick={onClick}>Search</button>
            </div>
        </div>
    );
})

export default Header;