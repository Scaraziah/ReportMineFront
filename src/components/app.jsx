import React from 'react';

import Bitlocker from './bitlocker/bitlocker'

function App() {
    // const [user, setUser] = useState()
    //     const jwt = localStorage.getItem('token');
    //         useEffect(() => {
    //             try{

    //                 const user = jwt_decode(jwt);
    //                 setUser(user)
    //                 console.log(user.name)
    //             }catch{
    //         }
    //     },[jwt])

  return (
    <div>
      <Bitlocker />     
    </div>
  );
}

export default App;
