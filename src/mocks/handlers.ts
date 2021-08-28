import { rest, RestRequest, RestContext, ResponseComposition } from "msw";

const INITIAL_URLS = [
  "http://testing.com/a",
  "http://testing.com/b",
  "http://testing.com/c",
  "http://testing.com/d",
];

const DONE_URLS = [
  "http://testing.com/e",
  "http://testing.com/f",
  "http://testing.com/g",
  "http://testing.com/h",
];

export const handlers = [
  // Handles a POST /login request
  rest.post("/crawl", (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
    return res(ctx.delay(1200), ctx.status(200), ctx.json({ id: Math.random() }));
  }),
  // Handles a GET /user request
  rest.get("/crawl/:id", (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
    return res(
      ctx.delay(1200),
      ctx.status(200),
      ctx.json({ id: req.params.id, status: "active", urls: INITIAL_URLS })
    );
  }),
];
