const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",(req, res) => {
    res.render("employees_time",{});
});
router.get("/l",(req, res) => {
    res.render("emloyees_time_list",{});
});
router.post("/Add",(req, res) => {
    let {id ,time_start	}=req.body;
    let q=`INSERT INTO \`employees_time\` (name,time_start) VALUES `;
    q += `((SELECT name FROM employees WHERE id = ${id}),`;
    q += `'${time_start	}')`;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})

        }else{
            res.status(200).json({message: "OK"});
        }
    });
    // res.send("good morning");
});



router.post("/Adds",(req, res) => {
let {name} = req.body;
let Query = `INSERT INTO \`employees_time\` (name, time_start, date) VALUES ('${name}', CURRENT_TIMESTAMP(), CURRENT_DATE())`;

    db_pool.query(Query, (err, rows) => {
    if (err)
        res.status(500).json({message: err});// throw err;
    else
        res.status(200).json({message: "Clock in", lastId: rows.insertId});// success;
})
});
router.post("/Adde",(req, res) => {

    let { name } = req.body;
    let Query = `UPDATE employees_time
    SET time_end = CURRENT_TIMESTAMP()
    WHERE name = '${name}'
    AND date = CURRENT_DATE()`;

    db_pool.query(Query, (err, rows) => {
        if (err)
            res.status(500).json({ message: err }); // throw err;
        else if (rows.affectedRows === 0) {
            res.status(404).json({ message: "No record found for the given name and date" });
        } else {
            res.status(200).json({ message: "Clock out successfully" });
        }
    });
});


router.patch("/EditS",(req, res) => {
    let name=req.body.name;
    let time_start=req.body.time_start;
    let q=`UPDATE employees_time  SET time_start ='${time_start}' WHERE name='${name}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});
router.patch("/EditE",(req, res) => {
    let name=req.body.name;
    let time_end=req.body.time_end;
    let q=`UPDATE employees_time  SET time_end ='${time_end}' WHERE name='${name}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});
router.delete("/Del",(req, res) => {
    let id=req.body.id;
    let q=`DELETE FROM \`employees_time\` WHERE id='${id}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});

router.get("/List",(req, res) => {
    let q="SELECT * FROM `employees_time` ";
    db_pool.query(q, function(err, rows, fields){
        if(err)
        {
            res.status(500).json({message: err})
        }
        else
        {
            res.status(200).json(rows );
        }
    });

    // res.send("good morning");
});