// import Joi from "joi";
// import { object } from "joi"
const Joi = require("joi")
/*
 * @Author: tuojinxin
 * @Date: 2023-05-10 15:29:28
 * @LastEditTime: 2023-05-10 16:00:49
 * @LastEditors: tuojinxin
 * @Description: 
 */
export const DogsCreateSchema = Joi.object({
    name: Joi.string().max(10).min(1).required(),
    age: Joi.number().integer().min(1).max(9999).required()
})