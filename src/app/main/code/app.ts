import {
  cors,
  opine,
  ReasonPhrases,
  Router,
  StatusCodes,
} from "../../../deps/prod.ts";
import config from "./config.ts";
import { eCat, eHandler } from "./middleware.ts";
import { RequestMeta } from "./models.ts";
import { homePage } from "./ui.ts";
import { HeaderKeys, URLs } from "./utils.ts";
import { logger } from "./utils.ts";

const router = Router();

router.get(URLs.INDEX, (_, res) => {
  res.send(homePage());
});

router.get(
  URLs.GET_HEADER_INFO,
  eCat((req, res) => {
    const reqMeta = new RequestMeta(
      req.ip,
      req.get(HeaderKeys.LANGUAGE),
      req.get(HeaderKeys.SOFTWARE),
    );
    res.send(reqMeta);
  }),
);

router.get(URLs.WILD, (_, res) => {
  res.status = StatusCodes.NOT_FOUND;
  res.send(ReasonPhrases.NOT_FOUND);
});

const app = opine();
app.use(cors());
app.use(router);
app.use(eHandler);

export default app;

if (import.meta.main) {
  app.listen(config.PORT, () => {
    logger.info(`timestamp service running...`);
    config.display();
  });
}
