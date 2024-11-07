import { useState } from 'preact/hooks';


function Greetings({messages}) {
 
const randoomGreeting = () =>{
   const len = messages.length;
   const rnum = Math.floor(Math.random()*len ); 
   const ranMessage = messages[rnum] ;
   console.log(ranMessage,rnum,len,"from greetings");
   return ranMessage;
}

const [greeting, setGreeting] = useState(messages[0]);


return (
    <div>
        <h3>{greeting} thank you!        </h3>
        <button onClick={() =>{
            setGreeting(randoomGreeting())
        }} >New

        </button>
    </div>
)

}


export default Greetings;