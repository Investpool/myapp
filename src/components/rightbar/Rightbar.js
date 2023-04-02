import React from 'react';
import "./rightbar.scss"


 function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://media.gettyimages.com/id/1178823473/photo/you-make-me-happy.jpg?s=612x612&w=gi&k=20&c=tWdKM3MPpXXxEiiOYRnQ2_4RoqhNikmng6ZNkoO-gw0=' alt=''/>
              <span>John Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://media.gettyimages.com/id/1367342107/photo/portrait-of-happy-young-couple-outdoors.jpg?s=612x612&w=gi&k=20&c=E1tB4-eUzNOopEU1re-bIO5fYuqVMNiScOPsxA-F25A=' alt=''/>
              <span>John Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
          <div className='item'>
            <span>Latest Activities</span>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://thumbs.dreamstime.com/z/loving-girlfriend-hugging-boyfriend-outdoors-tender-relations-love-closeness-loving-girlfriend-hugging-boyfriend-outdoors-tender-133667181.jpg' alt=''/>
              <p>
              <span>John Doe</span>
              changed their...
              </p>
            </div>
           <span>1 min ago</span>
            
          </div>
            
           <div className='user'>
            <div className='userInfo'>
              <img src='https://media.istockphoto.com/id/1162756373/photo/working-hard-is-second-nature-to-him.jpg?s=612x612&w=0&k=20&c=B1xFMSF0ndiUe9LhHPU5azY_y3kWFxvsKwKtu0QJE5c=' alt=''/>
              <p>
              <span>John Doe</span>
              <span>commented</span>
              </p>
            </div>
           <span>1 min ago</span>
            
          </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://media.istockphoto.com/id/996123866/photo/confident-in-his-leadership-abilities.jpg?s=612x612&w=0&k=20&c=DOY8OozMwNbR1cKa-aT-VpK5XjkFrQOSlnZxzQHnf8s=' alt=''/>
              <p>
              <span>John Doe</span>
                  posted
              </p>
            </div>
           <span>1 min ago</span>
            
          </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://media.istockphoto.com/id/1359393823/photo/a-man-smiles-with-beautiful-snow-white-teeth-to-phones-camera-to-say-hello-records-a-vlog-for.jpg?s=612x612&w=0&k=20&c=p8NR6zpnbqiT78lOWZ1NnX_wSJEF3oHBQezzInn57bw=' alt=''/>
              <p>
              <span>John Doe</span> Liked a post
              </p>
            </div>
           <span>1 min ago</span>
            </div>
          </div>
          <div className='item'>
            <span>Online Friends</span>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://media.gettyimages.com/id/1367342107/photo/portrait-of-happy-young-couple-outdoors.jpg?s=612x612&w=gi&k=20&c=E1tB4-eUzNOopEU1re-bIO5fYuqVMNiScOPsxA-F25A=' alt=''/>
              <div className='online'/>
              <span>John Doe</span> 
              </div>
           </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://media.istockphoto.com/id/996123866/photo/confident-in-his-leadership-abilities.jpg?s=612x612&w=0&k=20&c=DOY8OozMwNbR1cKa-aT-VpK5XjkFrQOSlnZxzQHnf8s=' alt=''/>
              <div className='online'/>
              <span>John Doe</span> 
              </div>
           </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://media.gettyimages.com/id/1367342107/photo/portrait-of-happy-young-couple-outdoors.jpg?s=612x612&w=gi&k=20&c=E1tB4-eUzNOopEU1re-bIO5fYuqVMNiScOPsxA-F25A=' alt=''/>
              <div className='online'/>
              <span>John Doe</span> 
              </div>
           </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://pixlr.com/images/index/remove-bg.webp' alt=''/>
              <div className='online'/>
              <span>John Doe</span> 
              </div>
           </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='https://media.istockphoto.com/id/1373127548/photo/portrait-of-happy-african-american-woman-on-the-street.jpg?s=612x612&w=0&k=20&c=EFDL1kYfOGnPjXwqHyZoooMuFcamVCpb6B77ncsenmw=' alt=''/>
              <div className='online'/>
              <span>John Doe</span> 
              </div>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Rightbar