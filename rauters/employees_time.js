const express = require('express');
const router = express.Router()
module.exports = router;

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


router.patch("/Edit/:row_id",(req, res) => {
    let id=req.params.row_id;
    let time_end=req.body.time_end;
    let q=`UPDATE employees  SET time_end ='${time_end}' WHERE id='${id}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});
router.delete("/Del/:row_id",(req, res) => {
    let id=req.params.row_id;
    let q=`DELETE FROM \`employees\` WHERE id='${id}' `;
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
    let q="SELECT * FROM `employees` ";
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