import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/user.Model";
import { NextRequest, NextResponse} from 'next/server';
import bcryptjs from 'bcryptjs';






connect();




export async function POST(request: NextRequest) {
    try {
        const reqBody = request.json()
        const {username, email, password} = reqBody
        // validation
        console.log(reqBody)

        const user = await User.findOne({email})
        if(user) {
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }







        
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message})
        {status: 500}
        
    }
}




