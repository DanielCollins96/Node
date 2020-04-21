import React, {useState, useEffect} from 'react';
import './Feed.css';

function Feed() {
    const [ isLoading, setIsLoading ] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let provincePosts = await fetch('http://localhost:4000/feed/man');
            console.log(provincePosts);
            // console.log(data.posts)
            let ppData = await provincePosts.json();
            // console.log(typeof ppData);
            setData(ppData)
            setIsLoading(false)   
            console.log(ppData)
            if(data){
                console.log('hihi');
                console.log(data);
            } else {
                console.log('hohoho')
            }

        };
        fetchData();
    }, []);

    // let listItems = () => {
    //     return <p>hihihi</p>
    // })

    return (
        isLoading ? <div>Loading</div> : <h1>HEY</h1> //{listItems} 


    );
}

export default Feed;