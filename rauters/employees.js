const express = require('express');
const router = express.Router()
module.exports = router;
router.get("/",function (req,res){
    res.render("employees",{});
})
router.post("/Add",(req, res) => {
    let name=req.body.name;

    let q=`INSERT INTO \`employees\` (\`name\`) VALUES ('${name}')`;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})

        }else{
            res.status(200).json({message: "OK"});
            // let l=`INSERT INTO \`employees_time\` (\`name\`) VALUES ('${name}')`;
        }
    });
});

router.patch("/Edit",(req, res) => {
    let id=req.body.id;
    let name=req.body.name;
    let q=`UPDATE \`employees\`  SET \`name\`='${name}' WHERE id=${id} `;
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
    // let id=req.params.row_id;
    let id=req.body.id;
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