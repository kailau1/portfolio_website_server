import mongoose from 'mongoose';

const server = 'localhost:27017'; 
const database = 'portfolio_website'; 

class Db {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

export default Db;