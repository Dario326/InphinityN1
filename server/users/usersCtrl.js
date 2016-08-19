const users = require("./users");


module.exports = {
    postUsers(req, res, next){
        new users(req.body).save( (err, newUser) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(201).json(newUser)
        })
    },
    getUsers(req, res, next){
        users.find({}, (err, users) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(users);
        })
    },
    getOneUser(req, res, next){
        users.findById(req.params.id, (err, user) =>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(user);
        })
    },
    deleteOneUser(req, res, next){
        users.findByIdAndRemove(req.params.id, (err, user) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(user);
        })
    },
    updateUser(req, res, next){
        users.findByIdAndUpdate(req.params.id, (err, user) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(user);
        })
    }
}