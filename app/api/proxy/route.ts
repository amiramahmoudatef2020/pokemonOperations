// code/app/api/proxy/route.ts

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response("Missing 'url' query parameter", { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);
    const contentType = response.headers.get('Content-Type') || 'text/plain';
    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch (err: any) {
    return new Response('Failed to fetch target URL', { status: 500 });
  }
}
