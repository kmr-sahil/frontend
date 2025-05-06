export function GET() {
    const content = `User-agent: *
  Disallow:
  Crawl-delay: 5
  Disallow: /cgi-bin/`;
  
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  