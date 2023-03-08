import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./share.css"


export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
            <img className="shareProfileImg" src="/assets/persons/ernst.jpg" alt=""/>
                <input placeholder="What's in your mind?" 
                className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <HomeOutlinedIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">photo</span>
                    </div>
                    <div className="shareOption">
                        <HomeOutlinedIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <HomeOutlinedIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <HomeOutlinedIcon htmlColor="brown" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
        
    </div>
  );
}
