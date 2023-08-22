const Code = require("../models/veficationCode.js");
const getCode = async (req, res, next) => {
    try {
        if (req.query && req.query.username) {
            const code = await Code.find(
                { username:  req.query.username}
            );
            res.status(200).json(code);
        }
        else{
            const code = await Code.find();
            res.status(200).json(Codes);
        }
    } catch (err) {
        next(err);
    }
};
const deleteCode = async (req,res,next) =>{
    try{
        await Code.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Code has been deleted");
    }catch(err){
        next(err)
    }

}

module.exports={
    getCode,
    deleteCode
}