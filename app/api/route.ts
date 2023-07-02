// Next.js API route support: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  console.log(req);
  //return new Response('Hello, Next.js!');
  return NextResponse.json({ name: 'HELLO WORLD' });
}
