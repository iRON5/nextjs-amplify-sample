// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes
export async function GET() {
  return new Response(JSON.stringify({ status: 'ok' }));
}
