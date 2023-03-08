import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";


const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://media.istockphoto.com/id/168252293/photo/safari-car-is-waiting-for-crossing-elephants.jpg?s=612x612&w=0&k=20&c=XgXFWCizGZQ6swKafSqvHf1Mq5NQGYqfQA7kYsYkVgI="
          alt=""
          className="cover"
        />
        <img
          src='https://media.istockphoto.com/id/996123866/photo/confident-in-his-leadership-abilities.jpg?s=612x612&w=0&k=20&c=DOY8OozMwNbR1cKa-aT-VpK5XjkFrQOSlnZxzQHnf8s='
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span>Garry Attipoe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Ghana</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>mekrom.com</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon style={{cursor:"pointer"}}/>
            <MoreVertIcon style={{cursor:"pointer"}}/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  );
};

export default Profile;
