const expresso = require("express");
const router = expresso.Router();
const { handlepostlongurl,handlegeturl,handlegetanalytics }  = require("../controllers/user")

router.post("/",handlepostlongurl);
router.get("/:id",handlegeturl);
router.get("/:id/analytics",handlegetanalytics);

module.exports = router;