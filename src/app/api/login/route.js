import { connectDB } from "@/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
export const POST = async (req, res) => {
  try {
    const { email, password } = await req.json();
    const emailExists = await User.findOne({
      email,
    });

    if (!emailExists) {
      return NextResponse.json({
        success: false,
        message: "Email or password is wrong",
      });
    }
    const matchPassword = await bcrypt.compare(password, emailExists.password);
    console.log(matchPassword);
    if (!matchPassword) {
      return NextResponse.json({
        success: false,
        message: "Email or password is wrong",
      });
    }
    const token = await jwt.sign(
      {
        token: emailExists._id,
      },
      "AryanPanchal",
      {
        expiresIn: "30d",
      }
    );

    return NextResponse.json(
      {
        success: true,
        token,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: e.message,
      },
      {
        status: 500,
      }
    );
  }
};
