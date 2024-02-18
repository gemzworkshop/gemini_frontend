import React from 'react'

export const ChatArea = () => {

    const handleSendEnter = (e)=>{
        if(e.key=="Enter"){
            console.log("Enter is pressed");
        }
    }

  return (
    <div className='chat-area'>
        <div className="ch-header"></div>
        <div className="ch-message">
            <div className="ch-ques">
                <div className="user-img"><img src="user.jpg" alt="" /></div>
                <div className="user-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laudantium?</div>
            </div>
            <div className="ch-ans">
                <div className="user-img"><img src="user.jpg" alt="" /></div>
                <div className="user-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, iste.</div>
            </div>
        </div>
        <input type="text" className='ch-textinput' onKeyDown={handleSendEnter}/>
    </div>
  )
}
