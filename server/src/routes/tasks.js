import {Router} from 'express';import Task from '../models/Task.js';const r=Router();
r.get('/',async(req,res)=>res.json(await Task.find({createdBy:req.user.id}).sort({completed:1,dueDate:1})));
r.post('/',async(req,res)=>res.status(201).json(await Task.create({...req.body,createdBy:req.user.id})));
r.put('/:id',async(req,res)=>{const t=await Task.findOneAndUpdate({_id:req.params.id,createdBy:req.user.id},req.body,{new:true,runValidators:true});if(!t)return res.status(404).json({message:'Task not found'});res.json(t);});
r.delete('/:id',async(req,res)=>{const t=await Task.findOneAndDelete({_id:req.params.id,createdBy:req.user.id});if(!t)return res.status(404).json({message:'Task not found'});res.json({success:true});});export default r;
