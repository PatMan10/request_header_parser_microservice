import { Router } from "../../deps.ts";
import { HeaderKeys, URLs } from "./utils.ts";
import { IndexPage } from "./ui.ts";
import { RequestMeta } from "./models.ts";

const controller = new Router();

controller.get(URLs.INDEX, (ctx) => {
  ctx.response.headers.set("content-type", "text/html");
  ctx.response.body = IndexPage();
});

controller.get(
  URLs.GET_HEADER_INFO,
  (ctx) => {
    const reqMeta = new RequestMeta(
      ctx.request.ip,
      ctx.request.headers.get(HeaderKeys.LANGUAGE) || undefined,
      ctx.request.headers.get(HeaderKeys.SOFTWARE) || undefined,
    );
    ctx.response.body = reqMeta;
  },
);

export default controller;
