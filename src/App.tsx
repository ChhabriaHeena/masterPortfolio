import { Suspense, lazy, useEffect, useState } from "react";
// import './App.css';
import Portfolio from './components/Portfolio';
import Loader from "./components/Loader";

const LazyPortfolio = lazy(() => import('./components/Portfolio'))

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);

  }, [loading])
  return (
    <div className="App">
      <Suspense fallback={<Loader loading={loading} />}><LazyPortfolio /></Suspense>
      {/* <Portfolio/> */}
    </div>
  );
}

export default App;
