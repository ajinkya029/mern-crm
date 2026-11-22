import {Router} from 'express';import Deal from '../models/Deal.js';const r=Router();
r.get('/',async(req,res)=>res.json(await Deal.find({createdBy:req.user.id}).populate('contact','name').sort({createdAt:-1})));
r.post('/',async(req,res)=>res.status(201).json(await Deal.create({...req.body,createdBy:req.user.id})));
r.put('/:id',async(req,res)=>{const d=await Deal.findOneAndUpdate({_id:req.params.id,createdBy:req.user.id},req.body,{new:true,runValidators:true});if(!d)return res.status(404).json({message:'Deal not found'});res.json(d);});
r.delete('/:id',async(req,res)=>{const d=await Deal.findOneAndDelete({_id:req.params.id,createdBy:req.user.id});if(!d)return res.status(404).json({message:'Deal not found'});res.json({success:true});});export default r;
