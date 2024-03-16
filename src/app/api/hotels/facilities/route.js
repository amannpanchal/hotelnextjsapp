import { connectDB } from "@/db";
import Hotel from "@/models/Hotel";
import { NextResponse } from "next/server";



export const GET = async (req, res) => {
    try {
        connectDB();
        const facilities = await Hotel.find({}).distinct('facilities.name')
         return NextResponse.json({
           success: true,
           facilities
         });
        
    } catch (e) {

         return NextResponse.json({
           success: false,
           message: e.message,
         });
        
    }
}

export const POST = async (req, res) => {
  try {
    connectDB();
    const { city, facilities, minPrice, maxPrice } = await req.json();
    let query = {
      location: city,
    };
     if (minPrice !== undefined && maxPrice !== undefined) {
       query["price"] = { $gte: minPrice, $lte: maxPrice };
     } else if (minPrice !== undefined) {
       query["price"] = { $gte: minPrice };
     } else if (maxPrice !== undefined) {
       query["price"] = { $lte: maxPrice };
     }

    const hotels = await Hotel.find(query);

    return NextResponse.json({
      success: true,
      hotels
      
    })
    



  } catch (e) {
    
         return NextResponse.json({
           success: false,
           message: e.message,
         });
  }
}