import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get('lat');
  const lng = req.nextUrl.searchParams.get('lng');

  if (!lat || !lng) {
    return NextResponse.json({ error: 'lat and lng are required' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'GOOGLE_MAPS_API_KEY is not set on the server' },
      { status: 500 }
    );
  }

  try {
    const metadataUrl = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${lat},${lng}&source=outdoor&key=${apiKey}`;
    const res = await fetch(metadataUrl);
    const data = await res.json();

    return NextResponse.json({
      available: data.status === 'OK',
      // Google may snap to the nearest panorama within its search radius —
      // return the actual pano location so the embed points at what was found.
      panoLat: data.location?.lat ?? null,
      panoLng: data.location?.lng ?? null,
      status: data.status,
    });
  } catch {
    return NextResponse.json({ available: false, status: 'REQUEST_FAILED' }, { status: 502 });
  }
}