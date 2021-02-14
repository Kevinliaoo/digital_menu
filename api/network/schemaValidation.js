const validation = (data, schema) => {
    const { error } = schema.validate(data); 
    return error; 
}

// Esta funcion se encarga de que los datos ingresados desde una peticion 
// coincidan con un schema
export const validationHandler = (schema, check="body") => {
    return (req, res, next) => {
        const error = validation(req[check], schema); 
        // Si la validación no se cumple tira un error
        error ? next(new Error('Internal error')) : next();
    }
}