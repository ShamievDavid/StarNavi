import { Intro } from 'components';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [introHide, setIntroHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroHide(true);
    }, 7000);
  }, []);

  return <div className="app">{!introHide && <Intro />}</div>;
}

export default App;
