const usersRoutes = require("./users/usersRoutes");

module.exports = app => {
    usersRoutes(app);
}