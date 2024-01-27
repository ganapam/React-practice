import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pagination.css';
import Pagination from './Pagination';

const Post = ({ title }) => {
    return (
        <div className='top'>
            {title}
        </div>
    );
}

const App = () => {
    const [data, setData] = useState([]);
    const [perpage, setPerpage] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => { setData(res.data); setPerpage(res.data.slice(0, 10)) }
        )
    }, []);

    const pageHandler = (pageNumber) => setPerpage(data.slice((pageNumber * 10) - 10, pageNumber * 10));

    return (
        <div className='data'>
            {data.length >= 1 ?
                <>
                    <div className='postContainer'>
                        {perpage.map(post => <Post key={post.id} title={post.title} />)}
                    </div>
                    <Pagination data={data} pageHandler={pageHandler} />
                </>
                : <p>data not loaded</p>}
        </div>
    );
}

export default App;
