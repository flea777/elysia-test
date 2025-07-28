import { Elysia } from 'elysia'

const app = new Elysia().get('/test', ({ body }) => {
  console.log(JSON.stringify(body))
}).listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
