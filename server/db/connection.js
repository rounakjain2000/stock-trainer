const mongoose= require('mongoose');

const connectdb = async()=>{
    try {
        // mongodb connection String..
        // mongodb+srv://admin:<password>@cluster0.yo6ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        const con = await mongoose.connect('mongodb+srv://admin:admin@cluster0.yo6ew.mongodb.net/stock?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            });
            console.log(`db connectoed at ${con.connection.host}`)
    } catch (err) {
        console.log(err);
        // process.exit(1);
    }
}

module.exports = connectdb;