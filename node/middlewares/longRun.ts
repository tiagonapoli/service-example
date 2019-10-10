export async function longRun(ctx: Context) {
    console.log("Started running longRun")
    ctx.set('Cache-Control', 'no-cache')
    await new Promise((resolve) => {
      setTimeout(resolve, 7000)
    })
    
    ctx.response.status = 200
    ctx.response.body = 'Hello, IO!'  
    console.log("Finished running longRung")
}
  