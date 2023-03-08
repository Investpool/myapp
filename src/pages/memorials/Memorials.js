import React from 'react'
import "./memorials.css"

 function Memorials() {
    return (
        <div>
            <PullDown/>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Voluptas iure harum
                architecto vero nostrum deleniti cum
                dolorum magnam, illo corporis atque
                explicabo. Dolorum recusandae, ipsa
                cumque quisquam aspernatur quae 
                dolores!
            </p>
        </div>
    )
}

function PullDown(){
    return(
        <div>
            <h4>Go Ghana</h4>
            <tr>
                <td>
                    <p className='fo' style={{marginRight:"20px", color:"blue"}}
                    >We are attending a special meeting here</p></td>
                <td><p>You need to come early</p></td>
            </tr>
        </div>
    )
}

export default Memorials;

