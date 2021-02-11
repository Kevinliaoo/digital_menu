import db from 'mongoose';

db.Promise = global.Promise; 

export async function connect(url) {
    console.log('Connecting to database'); 
    db.connect(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    })
        .then(() => console.log('[db] Database connected'))
        .catch(e => console.log(`[db] ${e.message}`))
}