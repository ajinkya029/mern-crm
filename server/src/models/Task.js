import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true},description:String,dueDate:Date,priority:{type:String,enum:['Low','Medium','High'],default:'Medium'},completed:{type:Boolean,default:false},createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}},{timestamps:true});
export default mongoose.model('Task',schema);
