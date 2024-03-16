import { connectDB } from "@/db";
import Hotel from "@/models/Hotel";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    try {


        await connectDB();
     
        const hotelId = req.url.split('hotels/')[1];
        const hotel = await Hotel.findById(hotelId)
        if (!hotel) {
            return NextResponse.json(
                {
                success: true,
               'message' : "Hotel not found"
              },
              {
                status: 400,
              }
            ); 
        }
        return NextResponse.json(
          {
            success: true,
            hotel
          },
          {
            status: 200,
          }
        );
        
    } catch (e) {
         return NextResponse.json({
           success: false,
           message: e.message,
         });
    }
}