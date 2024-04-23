import {connect} from '@/dbconfig/dbconfig';
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcryptjs";





 
connect()
export async function POST(request:NextRequest){
 
    try{
        const reqBody=await request.json()
        const {username,email, password}=reqBody
        console.log(reqBody)

        //check if user already Exists
        const (user){
            return NextResponse.json({error:"user already exists"},{status:400})


        }
        // Hash Password
        const salt =await bcrypt.js.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

       const newUser= new User({
            username,
            email,
            password:hashedPassword
        })

        const savedUser=await newUser.save()
        console.log(savedUser);
        return NextResponse.json({
            message:"User Created Successfully",
            success:true,
            savedUser
        }) 




    }catch(error:any){
        return NextResponse.json({error:error.message},
        {status:500})
          

    }
}