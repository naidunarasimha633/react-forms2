import React,{useState} from 'react';

function App(){
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('')

  return(
    <div className='border w-25 mt-5 m-auto p-4'>
      <h1 className="text-primary text-center">REGISTRATION FORM</h1>
      <div >
        <label>Email:</label>
      <input type='email' className="form-control" value={email}  onChange={(e)=>{setemail(e.target.value)}} />

      </div>
      <div>
      <label>password:</label>
      <input type='password' className="form-control"  value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
      </div>
      <div className="mt-3">
        <button type="button" className="btn btn-primary w-100"onClick={()=>{console.log("email",email)
          console.log("password",password.current.value)
        }}>submit</button>
      </div>
    </div>
  )
}
export default App;