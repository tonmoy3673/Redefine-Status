

import Banner from './Component/Banner';
import Deeper from './Component/Deeper';
import Nav from './Component/Nav';
import Overview from './Component/Overview';
import Simple from './Component/Simple';

function App() {
  return (
    <div className="px-10">
      <Nav/>
      <Banner/>
      <Overview/>
      <Deeper/>
      <Simple/>
    </div>
  );
}

export default App;
