const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const path = require("path");
const { allRoutes } = require("./router/router");
const createError = require("http-errors")
const morgan = require("morgan");
// const { appRoutes } = require("./router/router");

module.exports = class Application {
  #app = express();
  #PORT
  #DB_URL
  constructor(PORT, DB_URL) {
    this.#DB_URL=DB_URL;
    this.#PORT=PORT;
    this.configDatabase();
    this.configApplication();
    this.createServer();
    this.createRoutes();
    this.errorHandler();
  }
  configDatabase() {
    mongoose.connect("mongodb://localhost:27017/shopDB").then(() => {
      console.log("database connected");
    });

    process.on("SIGINT",async ()=>{
      await mongoose.connect.close()
    })
  }
  configApplication() {
    this.#app.use(morgan("dev"))
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
  }
  createServer() {
    const server = http.createServer(this.#app);
    server.listen(this.#PORT, () => {
      console.log(`app listen on http://localhost:${this.#PORT}`);
    });
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      next(createError.NotFound("not found!"))
    });
    this.#app.use((error, req, res, next) => {
      const serverErr = createError.InternalServerError()
      const status = error?.status || serverErr.status;
      const message = error?.message || serverErr.message;
      return res.status(status).json({ success: false, errors:{
        message: message
      } });
    });
  }
  createRoutes() {
    // this.#app.get("/", (req, res, next) => {
    //   return res.status(200).json({
    //     message: "hi",
    //   });
    // });
    this.#app.use(allRoutes );
  }
};