import React from "react";
import Post from "../post/Post";
import "./posts.scss"

const Posts = () =>{
//TEMPORARY


const posts = [
{
  id: 1,
  name: "Garry Attipoe",
  userId: 1,
  profilePic:'https://media.istockphoto.com/id/996123866/photo/confident-in-his-leadership-abilities.jpg?s=612x612&w=0&k=20&c=DOY8OozMwNbR1cKa-aT-VpK5XjkFrQOSlnZxzQHnf8s=',
  desc: "The President has opened The President has opened  Agric service Stations in all Districts  Agric service Stations in all Districts The President has opened  Agric service Stations in all Districts",
  img:"https://media.istockphoto.com/id/1321867054/photo/portrait-of-young-african-man-saying-yes-by-shaking-head.jpg?s=612x612&w=0&k=20&c=8N1cVW2ZxmSoji3gGraHvYsB16Ql0ZOnw0ukt-Wdjzs=",
},
{
  id: 2,
  name: "Judith Crabb",
  userId: 2,
  profilePic:"https://thumbs.dreamstime.com/z/loving-girlfriend-hugging-boyfriend-outdoors-tender-relations-love-closeness-loving-girlfriend-hugging-boyfriend-outdoors-tender-133667181.jpg",
  desc: "The safari van has entered the Zebra Zone. It's quite fricky on holidays.",
  img:"https://media.istockphoto.com/id/96773018/photo/game-drive.jpg?s=612x612&w=0&k=20&c=HGcqC9J6GrBrgOTlFt9edv5kIs4jGJHPg6y43u4PgwE=",
},

{
  id: 3,
  name: "John Doe",
  userId: 4,
  profilePic:"https://d33wubrfki0l68.cloudfront.net/12a2292f6eb42893088f7118f36b5985c2ba6c29/a7ffc/images/ghost/2022-06-13-5-image-apis-you-can-use-for-your-next-project-in-2022/1.png",
  desc: "The President has opened The President has opened  Agric service Stations in all Districts  Agric service Stations in all Districts The President has opened  Agric service Stations in all Districts",
  img:"assets/persons/priscilla.jpg"
},
];





return <div className="posts">
     {posts.map(post=>(
      <Post post={post} key={post.id}/>
     ))}
    </div>;
  
};


export default Posts;