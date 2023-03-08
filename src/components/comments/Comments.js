import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss"

 const Comments = () => {

    const {currentUser} = useContext(AuthContext)
   //Temporary
   
   const comments = [
        {
          id: 1,
          name: "John Doe",
          userId: 1,
          profilePic:"https://d33wubrfki0l68.cloudfront.net/12a2292f6eb42893088f7118f36b5985c2ba6c29/a7ffc/images/ghost/2022-06-13-5-image-apis-you-can-use-for-your-next-project-in-2022/1.png",
          desc: "Its quite delighting to come this far, sometimes you are very far from the enemy zone, but they are also very important partners in development",
          img:"https://pixlr.com/images/index/remove-bg.webp"
        },
        {
          id: 2,
          name: "Larry Quist",
          userId: 2,
          profilePic:"https://thumbs.dreamstime.com/z/loving-girlfriend-hugging-boyfriend-outdoors-tender-relations-love-closeness-loving-girlfriend-hugging-boyfriend-outdoors-tender-133667181.jpg",
          desc: "The President has opened  Agric service Stations in all Districts",
        },
        ];
        
        return(
            <> 
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt=""/>
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePic} alt=""/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
        </>
     );
          
    };


export default Comments;