const router = require("express").Router();
const passport = require("passport");
require("../config/passport")


router.get("/", (req, res) => {
    res.render("index.ejs");
});


router.get("/login", (req, res) => {
    res.render("login.ejs");
});

router.get("/profile", (req, res) => {
    res.render("profile.ejs");
});


router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });


module.exports = router;