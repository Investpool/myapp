import "./recentActivity.css"




export default function RecentActivity({user}) {
    return (
      <div>
        <li className="recentFriend">
          <div className="recentProfileImgContainer">
            <img
              className="recentProfileImg"
              src={user.profilePicture}
              alt=""
            />
            
          </div>
          <span className="recentUsername">{user.username}</span>
        </li>
      </div>
    );
  }