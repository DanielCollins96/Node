import React, {useState, useEffect} from 'react';
import './Feed.css';

function Feed() {
    const [data, setData] = useState({posts: {} });

    useEffect(() => {
        const fetchData = async () => {
            let provincePosts = await fetch('http://localhost:4000/feed/man');
            console.log(provincePosts);
            console.log(data.posts)
            let ppData = await provincePosts.json();
            console.log(typeof ppData);
            setData(ppData)
            // .then(console.log('lololol'));
            if(data.posts){
                console.log('hihi');
                console.log(data);
            } else {
                console.log('hohoho')
            }

        };
        fetchData();
    }, []);
    return (
        <h1>HEY</h1>

    );
}

export default Feed;