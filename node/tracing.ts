import {
  APP,
  LINKED,
  PRODUCTION,
  REGION,
  WORKSPACE
} from "@vtex/api/lib/constants";
import {
  initTracer as initJaegerTracer,
  TracingConfig,
  TracingOptions
} from "jaeger-client";

const initTracer = (
  serviceName: string,
  defaultTags: Record<string, string | boolean>
) => {
  const config: TracingConfig = {
    serviceName,
    sampler: {
      type: "const",
      param: 1
    },
    reporter: {
      logSpans: true,
      agentHost: "10.42.133.197"
    }
  };

  const options: TracingOptions = {
    tags: defaultTags,
    logger: {
      info(msg) {
        console.log("INFO ", msg);
      },
      error(msg) {
        console.log("ERROR", msg);
      }
    }
  };

  return initJaegerTracer(config, options);
};

export const initServiceTracer = () => {
  return initTracer("test1", {
    version: APP.VERSION,
    vendor: APP.VENDOR,
    region: REGION,
    linked: LINKED,
    production: PRODUCTION,
    worskpace: WORKSPACE
  });
};
