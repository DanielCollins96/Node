import React, {useState, useEffect} from 'react';
import './Feed.css';

function Feed() {
    const [provData, setProvData] = useState([
        {id: 2, value: "Hello"},
        {id: 4, value: "Sup"}
    ]);
    const [ isLoading, setIsLoading ] = useState(false);

    const testst8 = [
        {id: 2, value: "Hello"},
        {id: 4, value: "Sup"}
    ];
    useEffect(() => {
        const fetchData = async () => {
            let provincePosts = await fetch('http://localhost:4000/feed/ab');
            // console.log(provincePosts.json());
            let ppData = await provincePosts.json();
            console.log(ppData.data);
            // setProvData(ppData.data);
            setProvData(provincePosts.data);
            setIsLoading(false)   
            if(provData){
                console.log('hihi');
                console.log(provData);
                console.log(isLoading);
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
        // isLoading ? <div>Loading</div> : <h1>HEY</h1> //{listItems} 
        <div>

        {provData.map(el => {
            return <p>{el.value}</p>
        })}
        </div>


    );
}

export default Feed;