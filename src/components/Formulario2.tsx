import { useForm } from "../hooks/useForm"

interface FormDate {
      postal: string,
      cuidad: string,
}

const Formulario2 = () => {

      const { formulario, handleChange } = useForm<FormDate>({
            postal: 'ASD',
            cuidad: 'Goya'
      });

      const { postal, cuidad } = formulario;


      return (
            <form autoComplete="off">
                  <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                              type="text"
                              className="form-control"
                              name="postal"
                              value={postal}
                              onChange={handleChange}
                        />
                  </div>

                  <div className="mb-3">
                        <label className="form-label">Nombre:</label>
                        <input
                              type="text"
                              className="form-control"
                              name="cuidad"
                              value={cuidad}
                              onChange={handleChange}
                        />
                  </div>

                  <pre>{JSON.stringify(formulario)}</pre>

            </form>
      )
}

export default Formulario2