const { UserModel } = require("../models/register.models");

exports.getAll = async function (req, res) {
    const users = await UserModel.findAll();
    res.status(200).json({
        status: "success",
        message: users
    })
}


exports.getById = async function (req, res) {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (!user) {
        return res.status(400).json({
            status: "failed",
            message: "user not found"
        });
    }
    return res.status(200).json({
        status: "success",
        message: user
    })
}


exports.create = async function (req, res) {
    const payload = req.body;
    const users = await UserModel.create(payload);
    res.status(201).json({
        status: "success",
        message: users
    })
}


exports.updateById = async function (req, res) {
    const { id } = req.params;
    const payload = req.body;
    await UserModel.update(payload, {
        where: { id: id }
    });
    res.status(200).json({
        status: "success",
        message: "updated successfully"
    })
}


exports.deleteById = async function (req, res) {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (!user) {
        return res.status(400).json({
            status: "failed",
            message: "user not found"
        });
    }
    await UserModel.destroy({
        where: { id: id }
    });
    return res.status(200).json({
        status: "success",
        message: "deleted successfully"
    })
}