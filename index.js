import app from './app/config/';

if (!module.parent) {
    app.listen(8000, () => {
        console.log('listen app');
        
    });    
}

