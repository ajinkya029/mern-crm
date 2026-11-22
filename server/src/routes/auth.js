import {Router} from 'express';import bcrypt from 'bcryptjs';import jwt from 'jsonwebtoken';import User from '../models/User.js';
const router=Router();
router.post('/login',async(req,res)=>{try{const {email,password}=req.body;const user=await User.findOne({email});if(!user||!(await bcrypt.compare(password,user.password)))return res.status(401).json({message:'Email or password is incorrect'});const token=jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:'7d'});res.json({token,user:{id:user._id,name:user.name,email:user.email}});}catch(e){res.status(500).json({message:e.message});}});
router.get('/me',async(req,res)=>res.json({ok:true}));export default router;
