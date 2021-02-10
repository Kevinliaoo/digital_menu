import response from './response.js'; 

const errors = (e, req, res, next) => {
    console.error(`[error] ${e}`);

    const message = e.message || 'Internal server error'; 
    const status = e.statusCode || 500; 

    response.error(req, res, message, status);
}

export default { errors };