const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}
const connection = mongoose.connection;
connection.on('error', () => {
    console.log('Error to connect to database')
})

connection.on('connected', () => {
    console.log('connected to database')
})

module.exports = connection