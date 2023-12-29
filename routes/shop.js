const path = require("path");

const { Router } = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
