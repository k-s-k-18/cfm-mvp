import {useState} from 'react';



const App = ()=>{

  const generateToken=async()=>{

  const res = await fetch('http://localhost:3000/plaid/create_link_token',{
    method:'POST'
  });

  const data = await res.json();

  setLinkToken(data.linkToken);
}

  const [linkToken, setLinkToken] = useState();

  return(
    <div>
      <button onClick={generateToken}> Create Link </button>
      {console.log(linkToken)}
    </div>
  )
}

export default App;