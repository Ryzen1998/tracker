import RegisterForm from './Components/Auth/RegisterForm'
import LoginForm from './Components/Auth/LoginForm';
import 'papercss/dist/paper.min.css'
import { authProvider as AuthProvider } from './Context/AuthContext';
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
 
 <>
 <AuthProvider>
<Routes>
  <Route path='/' element={<LoginForm/>}/>
  <Route path='register' element={<RegisterForm/>}/>
</Routes>
 

 </AuthProvider>
 </>
     
   
  );
}

export default App;
