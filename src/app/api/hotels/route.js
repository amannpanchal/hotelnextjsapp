import { connectDB } from "@/db";
import Hotel from "@/models/Hotel";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
      await connectDB();
    
    const { description, banner, gallery, price, facilities, name, location } =
      await req.json();

    const newHotel = new Hotel({
      location,
      description,
      banner,
      gallery,
      price,
      facilities,
      name,
    });

    const result = await newHotel.save();
    return NextResponse.json({
      success: true,
      hotel: result,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: e.message,
    });
  }
};

export const GET = async (req, res) => {
  try {
    connectDB(); 
      const cityName = req.url.split('city=')[1]
      const hotels = await Hotel.find({
          location : cityName
      })
    const facilities = await Hotel.find({
          location : cityName
      }).distinct('facilities.name')
    return NextResponse.json({
      success: true,
      hotels: {
        facilities,
        hotels
      }
      }, {
          status : 200
      })
    
    
      
      
  } catch (e) {
        return NextResponse.json({
          success: false,
          message: e.message,
        });

  }
};