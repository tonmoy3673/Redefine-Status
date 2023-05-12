

import Banner from './Component/Banner';
import Cultural from './Component/Cultural';
import Deeper from './Component/Deeper';
import Nav from './Component/Nav';
import Overview from './Component/Overview';
import Simple from './Component/Simple';
import Humanity from './Component/Humanity';




function App() {
  return (
    <div className="px-10">
      <Nav/>
      <Banner/>
      <Overview/>
      <Deeper/>
      <Simple/>
      <Cultural/>
      <Humanity/>
    </div>
  );
}

export default App;
