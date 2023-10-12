// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes
export const runtime = 'edge'

export async function GET(req: Request, { params }: { params: { count: number } }) {
  const count = Number(params.count || 0) + 1;

  return new Response(JSON.stringify({ count }));
}
