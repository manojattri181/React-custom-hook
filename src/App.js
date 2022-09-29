import './App.css';
import useTimeout from './Components/useTimeout';
import GitHub from './CustomHook/GitHub';

function App() {
  const ready = useTimeout(5000);

  return (
    <div className='App'>
      <h1>Custom Hooks</h1>
    <div style={{display:"flex",width:"90%",margin:"auto",justifyContent:"space-evenly"}}>
         <div>
          <h1>useTimeout</h1>
        <h4 style={{border:"1px solid gray", color: ready ? "green":"black"}}>
         {ready ?"I am Ready ": `I will Ready in 5 seconds`}
        </h4>
        </div>

      <div>
        <GitHub />
      </div>
    </div>
    </div>
  );
}

export default App;
