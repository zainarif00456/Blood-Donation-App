import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [passwd, setpasswd] = useState("");

  function register(){
    let data = {email, passwd}
    console.log(data)
    fetch("http://localhost:5000/register", {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response=>response.json()).then(res=>{
      console.log(res)
    }).catch(e=>{
      console.error(e)
    })
  }
  
  
  return (
    <>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    BLOD Login
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                            <div class="form-group">
                                <label class="form-control-label">USER NAME</label>
                                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input type="password" value={passwd} onChange={(e)=>{setpasswd(e.target.value)}} class="form-control" />
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">

                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="button" onClick={register} class="btn btn-outline-primary">LOGIN</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
        </div>
    </>
  );
}

export default App;
