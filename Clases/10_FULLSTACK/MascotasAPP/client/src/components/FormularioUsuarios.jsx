import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import propTypes from "prop-types";

const formSchema = Yup.object().shape({
    nombre: Yup.string()
        .required("Campo Requerido"),
    apellido: Yup.string()
        .required("Campo Requerido"),
    edad: Yup.number()
        .required("Campo Requerido"),
    email: Yup.string()
        .required("Campo Requerido")
        .email("Correo Electrónico Inválido"),
    password: Yup.string()
        .required("Campo Requerido"),
});

const FormularioUsuarios = ({ initial, handleSubmit }) => {
    return (
        <Formik
            initialValues={initial}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <Field
                            className="form-control"
                            name="nombre"
                            type="text"
                        />
                        <ErrorMessage
                            name="nombre"
                            component="div"
                            className="field-error text-danger"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido:</label>
                        <Field
                            className="form-control"
                            name="apellido"
                            type="text"
                        />
                        <ErrorMessage
                            name="apellido"
                            component="div"
                            className="field-error text-danger"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edad">Edad:</label>
                        <Field
                            className="form-control"
                            name="edad"
                            type="number"
                        />
                        <ErrorMessage
                            name="edad"
                            component="div"
                            className="field-error text-danger"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <Field
                            className="form-control"
                            name="email"
                            type="email"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="field-error text-danger"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <Field
                            className="form-control"
                            name="password"
                            type="password"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="field-error text-danger"
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-block mt-2"
                        type="submit"
                        disabled={!(isValid && dirty)}
                    >
                        Guardar
                    </button>
                </Form>
            )}
        </Formik>
    );
};

FormularioUsuarios.propTypes = {
    initial: propTypes.object.isRequired,
    handleSubmit: propTypes.func.isRequired,
};

export default FormularioUsuarios;