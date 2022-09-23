import React from 'react'

const About = () => {
  return (
   <>
   
   <div style={{marginTop:'5%'}} className="container">

   <div className="card">
  <div className="card-body">
    <h4 className="card-title text-center">Faded-beta</h4>
    <h5 className="card-subtitle text-center">Made with ❤️ by Ashwin Paul</h5>
    <p className="card-text">Hi, Thankyou for trying out Faded, This app is still in its early stage of developement so the feautures,design you see now 
    is not final.</p>

    <h3>Things to add</h3>
   <ul>
    <li>
        Email verification
    </li>
    <li>
        Friends list and Private chat
    </li>
    <li>
        Profiles & Achievements badges
    </li>
    <li>
        Profile picture upload
    </li>
    <li>
        A better and Responsive design
    </li>
    
    <li>
        Image and video sharing (maybe?)
    </li>
    <li>
        migrate from React to NextJS (maybe?)
    </li>

    <li>
       much more impossible dreams ☹️
    </li>

   </ul>

   <h3>Ingredients</h3>

   <ul>
    <li>Asp.net core Web Api</li>
    <li>SignalR (Websockets Wrapper)</li>
    <li>React Js</li>
    <li>Entity Framework Core</li>
    <li>Azure SqlSever</li>
  <li>Azure App Service Free Tire (it really sucks)</li>
  <li>Alot of Bugs 🐞</li>
   </ul>

   <h3>Credits</h3>
   <ul>
    <li>ALLAH - Creator and Loving God</li>
    <li>Ashwin Paul - CEO & FOUNDER (oh boi🤣)</li>
    <li>Ashwin Paul - Designer</li>
    <li>Ashwin Paul - Frontend Developer</li>
    <li>Ashwin Paul - Backend Developer</li>
    <li>Ashwin Paul - Database Manager</li>
    <li>Microsoft - For its helpful yet awful Aws free tire</li>
   
   </ul>

   <br></br>

   <p className='text-center'>Lets talk business <a href = "mailto: HelloDearAsh@Gmail.com">HelloDearAsh@Gmail.com</a></p>
    
  </div>
</div>



   </div>
   </>
  )
}

export default About