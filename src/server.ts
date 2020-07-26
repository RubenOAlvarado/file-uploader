import mongoose, { mongo } from 'mongoose';

import app from './app';

mongoose.connect('mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Multer?retryWrites=true&w=majority',
{useNewUrlParser: true, useCreateIndex: true})
.then(() => console.log('Successfully connected to the db'))
.catch((err:Error) => console.log(err));

mongoose.set('useFindAndModify', false);

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

export {server as server};
