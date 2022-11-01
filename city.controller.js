'use strict';
const db = require("../models");
// const City = db.city;
const statusCode = require('./../utils/http-status-code');
const errorMessage = require('../languages/role');
// const _ = require('underscore')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// List city
exports.listCity = async (req, res) => {
    try {
        let searchText = req.query.st ? req.query.st : '';
        let skip = req.query.s ? req.query.s : 0;
        let limit = req.query.l ? req.query.l : 10;
        let response = await db.city.findAndCountAll({
            where: {
                is_deleted: "0",
                [Op.or]: [
                    {
                        city: {
                            [Op.like]: `%${searchText}%`,
                        },
                    },
                ]
            },
            attributes: ['id', 'city', 'created_at'],
            offset: parseInt(skip),
            limit: parseInt(limit)
        })
        return res.json({
            message: "List City",
            data: response,
        })
    } catch (error) {
        res.status(statusCode.InternalServerError).send({ message: error.message || errorMessage.lblInternalServerError });
    }
};


// Create city
exports.addCity = async (req, res) => {
    try {
        let { city } = req.body;
        await db.city.create({ city })

        this.listCity(req, res)
    } catch (error) {
        res.status(statusCode.InternalServerError).send({ message: error.message || errorMessage.lblInternalServerError });
    }
};

// View city
exports.viewCity = async (req, res) => {
    try {
        const id = req.query.city_id;
        let cityInfo = await db.city.findOne({
            where: {
                id,
            },
            attributes: ['id', 'city']
        })

        return res.status(statusCode.OK).json({
            message: "City Details",
            data: {
                id: cityInfo.id,
                city: cityInfo.city,
            }
        });
    } catch (error) {
        res.status(statusCode.InternalServerError).send({ message: error.message || errorMessage.lblInternalServerError });
    }
};

// Update city
exports.updateCity = async (req, res) => {
    try {

        console.log("this is body", req.body);
        await db.city.update(req.body, {
            where: {
                id: req.params.id,
            }
        })

        return res.status(statusCode.OK).send({});
    } catch (error) {
        res.status(statusCode.InternalServerError).send({ message: error.message || errorMessage.lblInternalServerError });
    }
};

// Delete city
exports.deleteCity = async (req, res) => {
    try {
        await db.city.update({
            is_deleted: "1"
        }, {
            where: {
                id: req.params.id
            }
        })

        this.listCity(req, res)
    } catch (error) {
        console.log("this is error", error)
        res.status(statusCode.InternalServerError).send({ message: error.message || errorMessage.lblInternalServerError });
    }
};
