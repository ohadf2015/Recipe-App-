const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const recipes = require('./routes/recipes');
const users = require('./routes/auth');
const logger = require('./middleware/logger');
const cookiep = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectMongo = require('./config/db');
const preventInjection = require('express-mongo-sanitize');
dotenv.config({ path: './config/config.env' });
connectMongo();
const app = express();
app.use(express.json());
app.use(cookiep());
if (process.env.NODE_ENV === 'development') {
    app.use(logger);
}
app.use(preventInjection());
app.use('/api/recipes', recipes);
app.use('/api/auth', users);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(colors.blue.bold.underline(`Server Running on Port ${process.env.NODE_ENV} mode on port ${PORT}!`)));
process.on('unhandledRejection', (err, promise) => {
    console.log(colors.red(`WE HAVE A ERROR! :( => ${err.message}`));
    server.close(() => {
        process.exit(1);
    })
})