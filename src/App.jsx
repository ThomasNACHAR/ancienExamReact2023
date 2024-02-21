import { useEffect, useState } from 'react'
import FirstTime from './components/FirstTime';
import Home from './components/Home';

function App() {
  const [data, setData] = useState({})
  const [firstLogin, setFirstLogin] = useState(true);
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (!storedData) {
      setFirstLogin(true); 
      console.log('Hey !')
    } else {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      setFirstLogin(false); 
      console.log(parsedData);
    }
  }, []);

  

  

  return (
    <>
      {firstLogin ? <FirstTime></FirstTime>
      : <Home prenom={data.prenom} taille={data.taille}></Home>}
    </>
  )
}

export default App
