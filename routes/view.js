const router = require("express").Router();


router.get("/", (req, res) => {
    res.render("index.ejs");
});


router.get("/login", (req, res) => {
    res.render("login.ejs");
});

router.get("/profile", (req, res) => {
    res.render("profile.ejs");
});


module.exports = router;