import {
    initTracer as initJaegerTracer,
    TracingConfig,
    TracingOptions,
  } from 'jaeger-client'
  
  const initTracer = (
    serviceName: string,
    defaultTags: Record<string, string | boolean>
  ) => {
    const config: TracingConfig = {
      serviceName,
      sampler: {
        type: 'const',
        param: 1,
      },
      reporter: {
        logSpans: true,
        agentHost: process.env.VTEX_OWN_NODE_IP
      },
    }
  
    const options: TracingOptions = {
      tags: defaultTags,
      logger: {
        info(msg) {
          console.log('INFO ', msg)
        },
        error(msg) {
          console.log('ERROR', msg)
        },
      },
    }
  
    return initJaegerTracer(config, options)
  }
  
  export const initServiceTracer = () => {
    return initTracer('disgraca', {})
  }
  