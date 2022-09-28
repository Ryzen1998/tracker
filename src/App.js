import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login';
import Home from './Components/Home/Home';
import PrivateRouter from './PrivateRouter/PrivateRouter'
import { authProvider as AuthProvider } from './Context/AuthContext';
import { chatProvider as ChatProvider } from './Context/ChatContext';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

import Mychat from './Components/Chat/Mychat';
import About from './Components/Author/About';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
 
 <>
 <AuthProvider>
  <ChatProvider>
<NavBar></NavBar> 
<Routes>
  
<Route path='/' element={<Login/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/register' element={<Register/>}/>
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
