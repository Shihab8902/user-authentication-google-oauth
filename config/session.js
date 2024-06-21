require("dotenv").config();
const session = require('express-session');
const MongoStore = require('connect-mongo');


const createSession = app => {
    app.set('trust proxy', 1)
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.DB_URL,
            dbName: process.env.DB_NAME,
            collectionName: "session-tokens"
        })

    }));
}


module.exports = createSession;