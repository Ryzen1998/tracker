import RegisterForm from './Components/Auth/RegisterForm'
import LoginForm from './Components/Auth/LoginForm';
import Home from './Components/Home/Home';
import PrivateRouter from './PrivateRouter/PrivateRouter'
import 'papercss/dist/paper.min.css'
import { authProvider as AuthProvider } from './Context/AuthContext';
import { chatProvider as ChatProvider } from './Context/ChatContext';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

import Mychat from './Components/Chat/Mychat';
import About from './Components/Author/About';


function App() {
  return (
 
 <>
 <AuthProvider>
  <ChatProvider>
<NavBar></NavBar> 
<Routes>
  
<Route path='/' element={<LoginForm/>}/>
  <Route path='/login' element={<LoginForm/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/register' element={<RegisterForm/>}/>
  <Route element={<PrivateRouter/>}>
  <Route path='/message' element={<Mychat/>}/>
  </Route>
 
</Routes>
 
</ChatProvider>
 </AuthProvider>
 </>
     
   
  );
}

export default App;
