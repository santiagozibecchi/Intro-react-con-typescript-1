import Counter from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import Usuario from "./components/Usuario";

function App() {
      return (
            <>
                  <h1>React + TypeScript</h1>
                  <hr />

                  <Counter />

                  <Usuario />

                  <h2>useEffect - useRef</h2>
                  <TimerPadre />
            </>
      );
}

export default App;
