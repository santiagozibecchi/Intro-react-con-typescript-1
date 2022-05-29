import ContadorRed from "./components/ContadorRed";
import Counter from "./components/Counter";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";
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

                  <h2>useReducer</h2>
                  <ContadorRed />

                  <h2>customHooks</h2>
                  <Formulario />

                  <br />
                  <br />

                  <h2>Formulario 2</h2>
                  <Formulario2 />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />


            </>
      );
}

export default App;
