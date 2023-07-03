import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  //   const name = searchParams.get('name');
  //   const instrument = searchParams.get('instrument');

  //   return NextResponse.json({
  //     name,
  //     instrument,
  //     reqUrl: req.url,
  //   });

  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj);
};
