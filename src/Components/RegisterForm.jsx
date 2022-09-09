/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React,{useContext} from 'react'
import Authcontext from '../Context/AuthContext.js'




function RegisterForm() {

    const {setUserData,userData,onRegisterClick,isSuccess,message}=useContext(Authcontext)

  return (
    <form className='paper container'>
       
       <h1 className='text-center'>My Space</h1>

      <div className='row '>
        <div className='col-6 col '>

              <label htmlFor='name'>Name</label>
            <input placeholder='your name' style={{width:'22vw'}} className='padding-right-large' type='text' id='name' onChange={(e)=>setUserData(eValue=>({...eValue,name:e.target.value}))} value={userData.name} name="name"/>
         </div>
          

       

         <div className='col-6 col'>
                  <label htmlFor='email'>E-Mail</label>
                 <input placeholder='example@example.com' style={{width:'21vw'}} className='padding-right-large' type='email' id='email' onChange={(e)=>setUserData(eValue=>({...eValue,email:e.target.value}))} name='email'/>
           </div>

        </div>

        <div className='row'> 

             <div className='col-6 col'>

                 <label htmlFor="dateofbirth">Date of Birth</label>
                 <input style={{width:'23vw'}} type='datetime-local' id='dateofbirth' onChange={(e)=>setUserData(eValue=>({...eValue,dateOfBirth:e.target.value}))} value={userData.dateofbirth} name='dateofbirth'/>
             </div>

             <div className='col-6 col'>
                <label htmlFor='pfp'>Profile Picture</label>
                <input style={{width:'20vw'}} type='file' alt='pfp' id='pfp' onChange={(e)=>setUserData(eValue=>({...eValue,profilePicture:e.target.value}))} name='pfp'/>
            
              </div>

        </div>
      

       <div className='row'>

          <div className='col-6 col'>

            <label htmlFor='username'>Username</label>
            <input placeholder='exampleuser' style={{width:'23vw'}} type='username' id='username' onChange={(e)=>setUserData(eValue=>({...eValue,userName:e.target.value}))} name='username'/>

          </div>
           
          <div className='col-6 col'>

           <label htmlFor='password'>Password</label>
            <input placeholder='secrete pass' style={{width:'22vw'}} type='password' id='password' onChange={(e)=>setUserData(eValue=>({...eValue,password:e.target.value}))} name='password'/>


          </div>
       </div>

         <div className='row flex-center '>

          <div className='col col'>

            <button type='button' style={{width:'24vw'}} className='btn-secondary btn-secondary-outline' onClick={onRegisterClick}>Register</button>
              
      

              {isSuccess&&<p className='margin-top-large'>Your account has been created, welcome home</p>}
              
              {message!==null&&  <div class="alert alert-danger margin-top-small">{message}</div>}

          </div>
         </div>
      


      
       


    </form>
  )
}

export default RegisterForm