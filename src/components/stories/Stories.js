import { useContext } from "react";
import {AuthContext} from "../../context/authContext"
import "./stories.scss";

const Stories = () => {

  const {currentUser} = useContext(AuthContext);
  
  
  
  
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Paul Nupp ",
      img: "https://media.istockphoto.com/id/1132916460/nl/foto/maiden-tower-bij-zonsondergang.jpg?b=1&s=170667a&w=0&k=20&c=lLcFtDA4l7nmYloup7aJVFjEzQfNlHxKIgvJ1J4oOdA=",
    },

    {
      id: 2,
      name: "Hurry Krug",
      img: "https://media.istockphoto.com/id/1132916460/nl/foto/maiden-tower-bij-zonsondergang.jpg?b=1&s=170667a&w=0&k=20&c=lLcFtDA4l7nmYloup7aJVFjEzQfNlHxKIgvJ1J4oOdA=",
    },
    {
      id: 3,
      name: "Surret Brew",
      img: "https://media.istockphoto.com/id/1132916460/nl/foto/maiden-tower-bij-zonsondergang.jpg?b=1&s=170667a&w=0&k=20&c=lLcFtDA4l7nmYloup7aJVFjEzQfNlHxKIgvJ1J4oOdA=",
    },
    {
      id: 4,
      name: "Tom Nupi",
      img: "https://media.istockphoto.com/id/1132916460/nl/foto/maiden-tower-bij-zonsondergang.jpg?b=1&s=170667a&w=0&k=20&c=lLcFtDA4l7nmYloup7aJVFjEzQfNlHxKIgvJ1J4oOdA=",
      
    },
   
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
      </div>
      {stories.map(story=> (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
