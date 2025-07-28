import { Elysia } from 'elysia'

const app = new Elysia()
  .post('/test', ({ body }) => {
    console.log('Corpo recebido:', body)
    return { message: 'Dados recebidos com sucesso!', data: body }
  })
  .get('/hello', () => {
    return { message: 'Hello World!' }
  })
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
