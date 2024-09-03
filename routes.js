const configureRoutes = (app) => {
    app.get("/", (req, res) => { res.send(`Server Running...`) });
    app.use("/api/v1/user", require("./routers/user.router"));
    app.use("*", (req, res, next) => {
        res.status(404).json({
            status: "failed",
            message: "Route not found",
        });
    });
};

module.exports = configureRoutes;
