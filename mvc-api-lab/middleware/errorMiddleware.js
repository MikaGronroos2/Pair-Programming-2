const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  console.log("Something broke!");
  res.status(500).send("Something broke!");
  next(error);
};

module.exports = {
  errorHandler,
};
