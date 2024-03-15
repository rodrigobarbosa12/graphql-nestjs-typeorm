import 'dotenv/config'
import * as ip from 'ip'
import { configapp } from './infrastructure/config/server-config'

async function bootstrap() {
  const { PORT_SERVER } = process.env

  const app = await configapp()

  await app.listen(PORT_SERVER, () => {
    console.log(`Server running in: http://${ip.address()}:${PORT_SERVER}`)
  })
}

bootstrap()
