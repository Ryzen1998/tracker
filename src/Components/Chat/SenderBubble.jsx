import React from 'react'

const SenderBubble = (props) => {
  return (
   <>
   <div style={{backgroundColor:'#7FC8F8'}} className="talk-bubble tri-right round right-in sender-bubble">
   <span className='bubble-username'>{props.userName}</span>
  <div className="talktext">
    <p>{props.message}</p>
  </div>
</div>
   </>
  )
}

export default SenderBubble