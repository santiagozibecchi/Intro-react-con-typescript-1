import { useEffect, useRef, useState } from "react";

type TimerArgs = {
      milesegundos: number
}

const Timer = ({ milesegundos }: TimerArgs) => {

      const [segundos, setSegundos] = useState(0);
      // crea una referecia que no importa cuantas veces se reconstruya un componente
      // siempre va a hacer el mismo puntero en memoria
      const ref = useRef<NodeJS.Timer>();

      useEffect(() => {

            ref.current && clearInterval(ref.current);
            // func propia de js - se va a ejecutar cada segundo
            ref.current = setInterval(() => setSegundos(s => s + 1), milesegundos);
            // si establecemos una funcion o callback dentro de una funcion como
            // el useState, el primer valor que emite es el valor actual(initial) del state


      }, [milesegundos])

      return (
            <h4>Timer: <small>{segundos}</small></h4>
      )
}

export default Timer