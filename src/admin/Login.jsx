import React from 'react'

function Login() {
  return (
    <>
    
    <div >
<br /><br />
    <div class="sufee-login d-flex align-content-center flex-wrap ">
        <div class="container ">
            <div class="login-content ">
             
                <div class="login-form  bg-dark" >
                <h1 className='text-center text-light'>Login</h1>
                    <form style={{padding: "10px"}}>
                        <div class="form-group">
                            <label>Fullname </label>
                            <input type="text" class="form-control" placeholder="Fullname"/>
                        </div>
                        <br />
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                     <br /><br /><br />
                        <button type="submit" class="btn btn-success btn-flat m-b-30 mt-30">Login</button>
                       
                      
                    </form>
                </div>
            </div>
        </div>
    </div>

  

</div>
    </>
  )
}

export default Login
