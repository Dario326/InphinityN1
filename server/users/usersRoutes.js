const usersCtrl = require(./usersCtrl);

module.exports = app => {
    app.post(`/api/users`, usersCtrl.postUsers);
    app.get(`/api/users`, usersCtrl.getUsers);
    app.get(`/api/users/:id`, usersCtrl.getOneUser);
    app.delete(`/api/users/:id`, usersCtrl.deleteOneUser);
    app.put(`/api/users/:id`, usersCtrl.UpdateOneUser);
    
}