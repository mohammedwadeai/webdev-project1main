// api/details/route.js

import { NextResponse } from "next/server";


export async function GET(req) {
    const placeId = req.nextUrl.searchParams.get("placeId") || ''; // Get page token from query string
    if (!placeId) {
        return NextResponse.json({ message: 'Bad Request: Place ID is required' });
    }
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    // Include 'reviews' in the fields query parameter to get the reviews
    const fields = 'name,rating,review,formatted_phone_number,reviews';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log({data})
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error});
    }
  }

  
// export async function GET(req, res) {
//     // if (req.method !== 'GET') {
//     //     return res.status(405).json({ message: 'Method Not Allowed' });
//     // }

//     const { placeId } = req.query;

//     if (!placeId) {
//         return res.status(400).json({ message: 'Bad Request: Place ID is required' });
//     }

//     const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
//     // Include 'reviews' in the fields query parameter to get the reviews
//     const fields = 'name,rating,review,formatted_phone_number,reviews';
//     const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.status !== 'OK') {
//             throw new Error(`Google Places API Error: ${data.status}`);
//         }

//         // Return only the necessary fields to the client to avoid overexposing data
//         const { name, rating, formatted_phone_number, reviews } = data.result;
//         // const clientData = { name, rating, formatted_phone_number, reviews };
//         return NextResponse.json(clientData);

//         res.status(200).json(clientData);
//     } catch (error) {
//         console.error('API call error:', error.message);
//         return NextResponse.json({error});

//         // res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// }
