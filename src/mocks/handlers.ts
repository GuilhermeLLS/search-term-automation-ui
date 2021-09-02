import { rest, RestRequest, RestContext, ResponseComposition } from "msw";

const URLS = [
  "http://testing.com/a",
  "http://testing.com/b",
  "http://testing.com/c",
  "http://testing.com/d",
];

export const handlers = [
  // Handles a POST /login request
  rest.post("/crawl", (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
    return res(ctx.delay(1200), ctx.status(200), ctx.json({ id: Math.floor(Math.random() * 100) }));
  }),
  // Handles a GET /user request
  rest.get("/crawl/:id", (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
    return res(
      ctx.delay(1200),
      ctx.status(200),
      ctx.json({ id: req.params.id, status: "active", urls: URLS })
    );
  }),
];
