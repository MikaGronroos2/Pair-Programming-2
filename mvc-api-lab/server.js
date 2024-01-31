const { errorHandler } = require("./middleware/errorMiddleware");
const { unknownEndpoint } = require("./middleware/notFoundMiddleware");
const express = require("express");
const app = express();

// Body Parser Middleware
app.use(express.json());

// Services API Routes
app.use("/api/services", require("./routes/servicesRoutes"));

// Tours API Routes
app.use("/api/tours", require("./routes/toursRoutes"));

// Members API Routes
app.use("/api/users", require("./routes/usersRoutes"));

// Init middleware
app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
