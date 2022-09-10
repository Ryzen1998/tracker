import React,{useContext} from "react";
import Authcontext from '../../Context/AuthContext'

function LoginForm() {
    const {setUserData,userData,onLoginClick}=useContext(Authcontext)
  return (
    <>
      <form className="paper container">
        <h1 className="text-center">My Space</h1>

        <div className="row flex-center ">
          <div className="col col ">
            <label htmlFor="email">Email</label>
            <input
              placeholder="example@example.com"
              style={{ width: "22vw" }}
              className="padding-right-large"
              type="email"
              name="email" value={userData.email}  onChange={(e) =>
                setUserData((eValue) => ({ ...eValue, email: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="row  flex-center">
          <div className="col col">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Secret Key"
              style={{ width: "21vw" }}
              className="padding-right-large"
              type="password"
              id="passowrd"
              name="password" value={userData.password}  onChange={(e) =>
                setUserData((eValue) => ({ ...eValue, password: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="row flex-center">
          <div className="col col">
            <button
              type="button"
              style={{ width: "10vw" }}
              className="btn-secondary btn-secondary-outline" onClick={onLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
