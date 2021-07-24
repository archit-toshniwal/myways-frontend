import React from 'react';

 
const SignUp = ()=>
{

    const [reg,setreg] = React.useState({
                fname:"",
                mail:"",
                phone:"",
                password:"",
                confirm:"" 
    });


    function Change(event)
    {
            event.preventDefault();
            const {name,value} = event.target;
            console.log(value);
            setreg({
                ...reg,
                [name]:value
            });
            

    }





    function Clicked(e){
        e.preventDefault();
        fetch('/register',{
            method:"POST",
            body:JSON.stringify({
                name:reg.fname,
                password:reg.password,
                email:reg.mail,
                phone_no:reg.phone,
                confirmPassword:reg.confirm
            }),
            headers : {
                'Content-Type' : 'application/json'
            } 
        })
        .then((res)=>res.json())
        .then((data)=> {
            const {error} = data;
            if(error){
                alert(error);
            }else{
                alert('user registered successfully');
            }
           
        });
    }

    return(
     <>
        <div  className="main-signup">
            <div className="top">
                <h1>Sign Up</h1>
                <div style={{float:'right', marginTop:'-40px'}}><i  className="fas fa-times"></i></div>
            </div>
            <div className="middle">
            <div id="form-part-two">
              <form>
                  <input type="text" name="fname" 
                  onChange=
                  {
                      (event)=>{
                           event.preventDefault();
                           Change(event);
                          }} value={reg.fname} placeholder="Full Name"  id="name"  />
                 <input type="email" name="mail"  onChange=
                    { 
                     (event)=>{
                         event.preventDefault(); 
                         Change(event)}}  value={reg.mail}  placeholder="Email"  id="mailId"/>
                 <input type="text"  name="phone"  onChange=
                 {
                     (event)=>{
                        event.preventDefault();
                        Change(event)
                     }} value={reg.phone} placeholder="Phone Number" id="Phone" />
                 <input type="password" name="password"   onChange={(event)=>{Change(event)}} value={reg.password}  placeholder="password" id="Password"  />
                 <input type="password" name="confirm"  onChange={(event)=>{Change(event)}} value={reg.confirm} placeholder="Confirm password"  id="confirmPass" />
                <p style={{fontSize:'15px'}}>By registering you agree to the,
                <a href="#">Terms </a>  and  
                <a href="#"> conditions  </a>
        #
                <a href="#">privacy policy</a>  
                </p>
                
                 <button id ="Btn2" 
                 onClick=
                 {
                     (event)=>{
                         Clicked(event);
                    }
                 }>Register as Candidate</button>
              </form>
              </div>
            </div>
            <div className="bottom">
                <p style={{textAlign:"center",fontSize:'16px'}}>Already have an account? <a href="_blank">Login</a></p>
            </div>

         
      </div>
     </>
   )
}

export default SignUp;