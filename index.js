// npm i express mysql2 ejs body-parser
const express = require('express');
const port = 7575;
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
const path = require('path');
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "js")));

let db_M = require('./database');
global.db_pool = db_M.pool;

//------------------------------------------------------------------------------------------//
const employees_rtr = require('./rauters/employees');
app.use('/employees', employees_rtr);

const employeesTime_rtr = require('./rauters/employees_time');
app.use('/employees_time', employeesTime_rtr);

//-------------------------------------------------------------------------------------------//
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
    console.log(`Now listening on port http://localhost:${port}/employees`);
    console.log(`Now listening on port http://localhost:${port}/employees_time`);
    console.log(`Now listening on port http://localhost:${port}/employees_time/l`);
});
