import React, {useState, useEffect} from 'react';
import './Feed.css';

function Feed() {
    const [data, setData] = useState({posts: [] });

    useEffect(() => {
        const fetchData = async () => {
            let provincePosts = await fetch('man');
            console.log(provincePosts);
            // setData(provincePosts);
        };
    }, []);
    return (
        <h1>HEY</h1>
    );
}

export default Feed;