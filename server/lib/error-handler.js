module.exports = function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars

  let code = 500, error = 'Internal Server Error';

  if (err.code) {
    code = err.code;
    error = err.error;
    console.log(err.code, err.error);
  }
  else {
    console.log(err);
  }
  
  res.status(code).send({ error });
};