import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true},company:String,value:{type:Number,default:0},stage:{type:String,enum:['Lead','Qualified','Proposal','Negotiation','Won','Lost'],default:'Lead'},closeDate:Date,contact:{type:mongoose.Schema.Types.ObjectId,ref:'Contact'},createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}},{timestamps:true});
export default mongoose.model('Deal',schema);
