import app from './app/config/';

if (!module.parent) {
  app.listen(8000, () => {
    // eslint-disable-next-line no-console
    console.log('listen app');    
  });    
}

