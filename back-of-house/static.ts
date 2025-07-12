// Require the framework and instantiate it

// ESM
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'dist'),
});

// Run the server!
fastify.listen({ port: PORT, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
