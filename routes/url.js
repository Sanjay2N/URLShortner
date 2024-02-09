const { Router } = require("express");
const { getShortURL, getURL, getURLAnalytic } = require("../controllers/url");
const router = new Router();

router.post("/", getShortURL);
router.get("/:id", getURL);
router.get("/analytics/:id", getURLAnalytic);
module.exports = router;
