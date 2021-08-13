var jwt = require('jsonwebtoken');

const config = require('../config/custom-environment-variables.json');
function verify(req,res,next){
    var token = req.headers["token"]
    console.log(token);
    jwt.verify(token,global.config.secretKey,
    {
        algorithm : global.config.algorithm
    },
    function(err,decoded){
        if(err){
            let errordata={
                message:err.message,
                expriredAt:err.expriredAt
            };
            console.log(errordata);
            return res.status(401).json({
                message:'Unauthorized Access'
            });
        }
        req.decoded=decoded;
        console.log(decoded);
        next();
        
    })
}

module.exports=verify