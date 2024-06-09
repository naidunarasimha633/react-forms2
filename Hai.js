import React,{useState} from 'react';

function Hai(){
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('')
  const [errors,seterrors]=useState({
    email:'',
    password:''
  })
  const  emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;
  function handlesubmit(){
    if(email.trim()===""){
        seterrors((errors)=>({...errors,email:"enter emailid"}))
    }
    else if(! emailpattern.test(email)){
        seterrors((errors)=>({...errors,email:"enter valid mail address"}))
    }
    else{
        seterrors((errors)=>({...errors,email:""}))
    }
    if(password.trim()===""){
        seterrors((errors)=>({...errors,password:"enter password"}))
    }

    else if(password.trim().length<8){
        seterrors((errors)=>({...errors,password:"enter valid password"}))
    }
    else{
        seterrors((errors)=>({...errors,password:""}))
    }
   console.log("email",email)
   console.log("password",password)
  }

  return(
    <div style={{backgroundColor:"green"}}>
    <div className='border w-25 mt-5 m-auto p-4'>
      <h1 className="text-primary text-center">REGISTRATION FORM</h1>
      <div >
        <label>Email:</label>
      <input type='email' className="form-control" value={email}  onChange={(e)=>{setemail(e.target.value)}} />
    {errors.email&& <span className='text-danger'>{errors.email}</span>}
      </div>
      <div>
      <label>password:</label>
      <input type='password' className="form-control"  value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
      </div>
      {errors.password&&<span className='text-danger'>{errors.password}</span>}
      <div className="mt-3">
        <button type="button" className="btn btn-primary w-100"onClick={()=>{
         handlesubmit()
        }}>submit</button>
      </div>
    </div>
    </div>
  )
}
export default Hai;