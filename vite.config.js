THIS IS BROKEN SYNTAX

export default {
  server: {
    host: '0.0.0.0',
    hmr: {
      protocol: 'wss',
      host: 'localhost'
    }
  },
  // This is the key line
  configureServer: (server) => {
    server.middlewares.use((req, res, next) => {
      // Allow all hosts
      next();
    });
  }
}