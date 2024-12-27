var jwt = require('jsonwebtoken');
const JWT_Secret="ch@r@nCholaveti";

 const fetchUser = (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token,JWT_Secret);
        requser=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
 }


module.exports=fetchUser;