const app = require("./app");
const connectDB = require("./config/db");

const PORT = 9000;

const run = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`The server is running at http://localhost:${PORT}`);
    });
}


run();

