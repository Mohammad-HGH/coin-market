import './App.css';
import Loader from './Components/Shared/Loader';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className=" 1-column undefined  page-animated svg-wrapper" data-menu-open="hover" data-menu="">
      <Loader />
      <Home />
    </div>
  );
}

export default App;
