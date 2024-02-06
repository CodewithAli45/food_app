const authRoute = require("./authRouter");
const userRoute = require("./userRouter")

const router = {
    userRoute,   
    authRoute
}

module.exports = router;
