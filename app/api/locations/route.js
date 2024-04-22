// api/locations/route.js

import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  const location = "51.0447,-114.0719"; // Coordinates for Calgary
  const radius = 10000; // Search radius in meters
  const type = 'restaurant'; // Type of places to search for
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // API key stored in environment variables
  const pageToken = req.nextUrl.searchParams.get("pageToken") || ''; // Get page token from query string
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${apiKey}${pageToken ? `&pagetoken=${pageToken}` : ''}`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      return NextResponse.json(data);
  } catch (error) {
      return NextResponse.json({error});
  }
}
