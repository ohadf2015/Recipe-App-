const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const recipes = require('./routes/recipes');
const categories = require('./routes/categories');
const recommendations = require('./routes/recommendations');
const auth = require('./routes/auth');
const userData = require('./routes/userData');
const logger = require('./middleware/logger');
const cookiep = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectMongo = require('./config/db');
const preventInjection = require('express-mongo-sanitize');
const createRecommendations=require('./controllers/userData').createRecommendations





dotenv.config({ path: './config/config.env' });
connectMongo();
const app = express();
app.use(cors(({ credentials: true, origin: 'http://localhost:8080' })));
app.use(express.json());
app.use(cookiep());
if (process.env.NODE_ENV === 'development') {
    app.use(logger);
}
app.use(preventInjection());
app.use('/api/recipes', recipes);
app.use('/api/categories', categories);
app.use('/api/recommendations', recommendations);
app.use('/api/auth', auth);
app.use('/api/userData', userData);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(colors.blue.bold.underline(`Server Running on Port ${process.env.NODE_ENV} mode on port ${PORT}!`))
     createRecommendations()
});
process.on('unhandledRejection', (err, promise) => {
    console.log(colors.red(`WE HAVE An ERROR! :( => ${err.message}`));
    server.close(() => {
        process.exit(1);
    })
})