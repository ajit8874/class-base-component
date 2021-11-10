import React,{useState,useEffect} from 'react';
 function User (){
     const [count,setCount]=useState(0)

     console.log("state calleld")
     


     useEffect(() => {
       console.log("useEffect called")
       
      });
      console.log("render called")
     return (
        
         <div>
         
           <h1>user Component</h1>
           <h1>{count}</h1>
           

           <button onClick={()=>setCount(count+1)}>Update Counter</button>
         </div>
     )
 }
 export default User;