
require("dotenv").config();
const passport = require("passport");
const userCollection = require("../models/userModel");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:9000/auth/google/callback"
},
    async (accessToken, refreshToken, profile, cb) => {
        try {
            const isUserExist = await userCollection.findOne({ googleId: profile.id });

            // If user already exists, return the user
            if (isUserExist) {
                return cb(null, isUserExist);
            }
            // Create a new user if no user exists
            const newUser = new userCollection({ googleId: profile.id, username: profile.displayName });
            await newUser.save();
            return cb(null, newUser);
        } catch (err) {
            return cb(err, null);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userCollection.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});
