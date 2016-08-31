// import the necessary modules
import {Mongoose} from '../config/mongoose'
// create an export function to encapsulate the model creation
// define schema
const Schema = Mongoose.Schema
let articleSchema = new Schema({
  title: { //文章标题
    type: 'String',
    required: true
  },
  content: { //文章内容
    type: 'String',
    required: true
  },
  groupId: { //所属分组ID
    type: 'String',
    required: true
  },
  status: { //文章状态，1是已发布，0是草稿态
    type: 'Number',
    default: 0
  }
})
export const articleModel = Mongoose.model('article', articleSchema)
