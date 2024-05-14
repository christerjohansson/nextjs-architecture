import { NextResponse } from 'next/server';
import { get } from 'src/services/apiClient';

export async function GET() {
  try {
    const data = await get('/api/', { page: '1', results: '1' });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 },
    );
  }
}
