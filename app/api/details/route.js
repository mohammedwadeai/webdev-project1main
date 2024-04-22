// api/locations/details.js

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { placeId } = req.query;

    if (!placeId) {
        return res.status(400).json({ message: 'Bad Request: Place ID is required' });
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    // Include 'reviews' in the fields query parameter to get the reviews
    const fields = 'name,rating,review,formatted_phone_number,reviews';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK') {
            throw new Error(`Google Places API Error: ${data.status}`);
        }

        // Return only the necessary fields to the client to avoid overexposing data
        const { name, rating, formatted_phone_number, reviews } = data.result;
        const clientData = { name, rating, formatted_phone_number, reviews };

        res.status(200).json(clientData);
    } catch (error) {
        console.error('API call error:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
