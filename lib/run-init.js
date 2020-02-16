const logger = {
  log: (msg) => console.log(msg),
};


// handle unhandled promise rejection
process.on('unhandledRejection', (error, promise) => {
  logger.log('UNHANDLED PROMISE REJECTION', { error });
});

process.on('multipleResolves', (type, promise, reason) => {
  console.log('MULTIPLE RESOLVES', type, promise, reason);
  // logger.log('MULTIPLE RESOLVES', { error });
});
process.on('rejectionHandled', (promise) => {
  console.log('REJECTION HANDLED', promise);
  // logger.log('REJECTION HANDLED', { error });
});


// explicitly exit on signal while running dev
// this is needed to help exit out of our npm run tasks that watch+lint+restart/test
if (process.env.NODE_ENV !== 'production') {
  ['SIGTERM', 'SIGINT'].forEach((signal) => {
    process.on(signal, () => process.exit(0));
  });
}
