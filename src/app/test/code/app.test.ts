import { StatusCodes } from "../../../deps/prod.ts";
import { Rhum, superoak } from "../../../deps/dev.ts";
import app from "../../main/code/app.ts";
import { URLs } from "../../main/code/utils.ts";
import { RequestMeta } from "../../main/code/models.ts";

const { assertEquals, assertExists } = Rhum.asserts;

const title = "*-*-*-*-*-*-*-*-*-*- Timestamp Service *-*-*-*-*-*-*-*-*-*-";
Rhum.testPlan(
  title,
  () => {
    console.log(title);

    Rhum.testSuite(`---------- GET ${URLs.GET_HEADER_INFO} ----------`, () => {
      const exec = async () => (await superoak(app)).get(URLs.GET_HEADER_INFO);

      Rhum.testCase("200 success, return timestamp\n", async () => {
        const res = await exec();
        const timestamp: RequestMeta = res.body;

        assertEquals(res.status, StatusCodes.OK);
        assertExists(timestamp.ipaddress);
        assertExists(timestamp.language);
        assertExists(timestamp.software);
      });
    });
  },
);

Rhum.run();
