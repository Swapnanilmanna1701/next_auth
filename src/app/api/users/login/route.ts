import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.Model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await  request.json();
    const {  email, password } = reqBody;
    // validation
    console.log(reqBody);

    const user = await User.findOne({email})
    if(!user){
        return NextResponse.json(
            { error: "User does not exist" },
            { status: 400 }
        );

    }
    console.log("User exists!");


    const validPassword = await bcryptjs.compare(password, user.password)
    if(!validPassword){
        return NextResponse.json(
            { error: "Invalid Password" },
            { status: 400 }
        );
    }
    console.log(user);


    const tokenData = {
        id: user._id,
        email: user.email,
        username: user.username,
    }
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

    const response  = NextResponse.json({
        message: "Login successful",
        success: true,
    });

    response.cookies.set("token", token, {
        httpOnly: true,
    });

     



        
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
        {
            status: 500;
        }
        
    }


}