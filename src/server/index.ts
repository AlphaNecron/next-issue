import next from 'next';
import type { NextServer } from 'next/dist/server/next';
import { createServer } from 'http';

export class Server {
  private server: NextServer;
  constructor() {
    this.server = next({
      hostname: '0.0.0.0',
      port: 3000,
      dir: '.',
      dev: process.env.NODE_ENV === 'development',
      quiet: false
    });
  }
  start() {
    this.server.prepare().then(() => {
      const handler = this.server.getRequestHandler();
      const server = createServer(handler);
      server.listen(3000, '0.0.0.0', null, () => {
        console.log('listening on :3000');
      });
    })
  }
}
