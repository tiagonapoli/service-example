import { a } from "@tiagonapoli/test-pkg-a";
import { b } from "@tiagonapoli/test-pkg-b";
import { Service, ServiceContext } from "@vtex/api";
import { initServiceTracer } from "./tracing";

console.log("IMPORT DE A", a);
console.log("IMPORT DE B", b);

const tracer = initServiceTracer()

export default new Service({
  routes: {
    test: (ctx: ServiceContext) => {
      const span = tracer.startSpan('test')
      ctx.body = "test";
      ctx.status = 200;
      span.finish()
    }
  }
});
