import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login';
import Home from './Components/Home/Home';
import PrivateRouter from './PrivateRouter/PrivateRouter'
import { authProvider as AuthProvider } from './Context/AuthContext';
import { chatProvider as ChatProvider } from './Context/ChatContext';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

import About from './Components/Author/About';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import ChatMain from './Components/Chat/beta/ChatMain';


function App() {
  return (
 
<CssBaseline>
 <AuthProvider>
  <ChatProvider>
<NavBar></NavBar> 
<Routes>
  
<Route path='/' element={<Login/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route element={<PrivateRouter/>}>
  <Route path='/message' element={<ChatMain/>}/>
  </Route>
 
</Routes>
 
</ChatProvider>
 </AuthProvider>
 </CssBaseline>
     
   
  );
}

export default App;
