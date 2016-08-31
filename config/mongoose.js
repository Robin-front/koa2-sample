/**
 * 数据库连接
 */
import mongoose from 'mongoose'
import {
    MongoDbUrl,
    DefaultLimit
} from './index'

mongoose.connect(MongoDbUrl)

export const Mongoose = mongoose

export const defaultLimit = DefaultLimit
