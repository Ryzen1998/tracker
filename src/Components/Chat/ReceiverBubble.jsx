import React from 'react'


const ReceiverBubble = (props) => {
  return (
    <>
    <div style={{backgroundColor:'#FFE45E'}} className="talk-bubble tri-right left-top">
 <span className='bubble-username'>{props.userName}</span>
  <div className="talktext">
    <p>{props.message}</p>
  </div>
</div>
    </>
  )
}

export default ReceiverBubble