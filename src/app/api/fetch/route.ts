const urlMetadata = require("url-metadata");
export async function POST(request: Request) {
  let url = "";
  await request.json().then(async (res) => {
    const metadata = await urlMetadata(res.url);
    url = metadata["og:image"];
  });
  return Response.json({ url });
}
