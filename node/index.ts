import { a } from "@tiagonapoli/test-pkg-a";
import { b } from "@tiagonapoli/test-pkg-b";
import { Service, ServiceContext } from "@vtex/api";
// import { initServiceTracer } from "./tracing";

console.log("IMPORT DE A", a);
console.log("IMPORT DE B", b);

// const tracer = initServiceTracer();

// const socket = dgram.createSocket('udp4')

// socket.send('olar', 6832, 'jaeger.test-4a.ingress.vtex.io', (err, sent) => {
//   console.log(err, sent)
// })

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const sleep = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export default new Service({
  routes: {
    test: async (ctx: ServiceContext) => {
      // const span = tracer.startSpan("test");
      await sleep(randomIntFromInterval(1000, 3000))
      ctx.body = "test";
      ctx.status = 200;
      // span.finish();
    }
  }
});
