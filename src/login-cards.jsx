
import React  from 'react';


const Card = ()=>
{

    const [state,setState] = React.useState({
        email:"",
        password:""
    });

    function clicked(event)
    {
        event.preventDefault();
        fetch('/login',{
            method:"POST",
            body:JSON.stringify({
                email:state.email,
                password:state.password
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
               alert('login successfull');
           }
        });
    }




    function change(event)
    {
            
        event.preventDefault();
        const {name,value} = event.target;
        //console.log(value);
        setState({
            ...state,
            [name]:value
        });
    }

    return(
        <>
      <div  className="main-login">
         <div className="top-part">
             <div  className="heading">
                 <h1>Login</h1> 
                 <div style={{float:'right', marginTop:'-40px'}}><i  className="fas fa-times"></i></div>         
             </div>
        </div>
           
           


          <div className="middle-part">
              <div id="form-part">
              <form>
                 <input name="email" type="email" onChange={(event)=>change(event) } placeholder="Email"  id="mail" value={state.email} autoComplete="false"/>
                 <input name="password" type="password" onChange={(event)=>change(event) } placeholder="password" id="pass" value={state.password} autoComplete="false" />
                 <button id ="btn" onClick={(event)=>clicked(event)}>Login</button>
              </form>
              </div>
          </div>
          <div className="bottom-part">
              <div id="bottom">
              <p>Forgot Your Password?</p>
              <p>Don't have an account yet? <a href="_blank">Register</a></p>
              </div>
          </div>

      </div>
       


        </>
    )
}
export default Card;