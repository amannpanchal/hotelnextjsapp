import { connectDB } from "@/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
export const POST = async (req, res) => {
  try {
    const { name, email, password } = await req.json();

    connectDB();
    if (!name || !email || !password) {
      return NextResponse.json({
        msg: "All fields are mandatory",
      });
    }
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exits",
        },
        {
          status: 400,
        }
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    const result = await newUser.save();
    const token = jwt.sign(
      {
        token: result._id,
      },
      "AryanPanchal",
      {
        expiresIn: "30d",
      }
    );

    return NextResponse.json(
      {
        success: true,
        user: newUser,
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
