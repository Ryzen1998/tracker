import RegisterForm from './Components/RegisterForm'
import 'papercss/dist/paper.min.css'
import { authProvider as AuthProvider } from './Context/AuthContext';
import './App.css';

function App() {
  return (
 
 <>
 <AuthProvider>

 <RegisterForm/>

 </AuthProvider>
 </>
     
   
  );
}

export default App;
