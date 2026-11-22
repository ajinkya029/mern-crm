import {Router} from 'express';import Contact from '../models/Contact.js';const r=Router();
r.get('/',async(req,res)=>res.json(await Contact.find({owner:req.user.id}).sort({createdAt:-1})));
r.post('/',async(req,res)=>{const c=await Contact.create({...req.body,owner:req.user.id});res.status(201).json(c);});
r.put('/:id',async(req,res)=>{const c=await Contact.findOneAndUpdate({_id:req.params.id,owner:req.user.id},req.body,{new:true,runValidators:true});if(!c)return res.status(404).json({message:'Contact not found'});res.json(c);});
r.delete('/:id',async(req,res)=>{const c=await Contact.findOneAndDelete({_id:req.params.id,owner:req.user.id});if(!c)return res.status(404).json({message:'Contact not found'});res.json({success:true});});export default r;
