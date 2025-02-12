import { Suspense, lazy } from "react";
// import './App.css';
import Portfolio from './components/Portfolio';

const LazyPortfolio = lazy(()=> import('./components/Portfolio'))

function App() {
  return (
    <div className="App">
      <Suspense fallback="Portfolio is Loading..."><LazyPortfolio/></Suspense>
      {/* <Portfolio/> */}
    </div>
  );
}

export default App;
