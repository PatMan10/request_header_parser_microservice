import {
  cors,
  opine,
  ReasonPhrases,
  Router,
  StatusCodes,
} from "../../../deps/prod.ts";
import config from "./config.ts";
import { eCat, eHandler } from "./middleware.ts";
import { Timestamp } from "./models.ts";
import { homePage } from "./ui.ts";
import { URLs } from "./utils.ts";
import { logger } from "./utils.ts";

const router = Router();

router.get(URLs.INDEX, (_, res) => {
  res.send(homePage());
});

router.get(
  URLs.GET_TIMESTAMP,
  eCat((req, res) => {
    const { date } = req.params;
    const timestamp = new Timestamp(date);
    res.send(timestamp);
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
