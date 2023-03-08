import {useState} from "react";
import "./post.scss";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import  ShareOutlinedIcon  from "@mui/icons-material/ShareOutlined";
import  TextsmsOutlinedIcon  from "@mui/icons-material/TextsmsOutlined";
import Comments from "../comments/Comments";
//import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  

//TEMPORARY
const liked = false;


  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon style={{cursor:"progress"}}/>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt=""/>
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined/>:<FavoriteBorderOutlinedIcon/>}
          <div className="postBottomLeft">
              

              <span className="postLikeCounter">12 likes</span>
          </div>
            
            
          </div>
          <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            12 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
