import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},email:String,phone:String,company:String,role:String,status:{type:String,default:'Lead'},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}},{timestamps:true});
export default mongoose.model('Contact',schema);
