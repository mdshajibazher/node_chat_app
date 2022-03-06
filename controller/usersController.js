function getUsers(req,res,next){
    res.render('users')
}
async function addUser(req,res,next){
    let newUser;
    const hashedPasssword = await bcrypt.hash(req.body.password,10);
    if(req.files && req.files.length > 0){
        newUser = new User({
            ...req.body,
            avatar: req.files[0].filename,
            password: hashedPasssword,
        })
    }else{
        newUser = new User({
            ...req.body,
            password: hashedPasssword,
        })
    }

    try{
        const result = await newUser.save();
        res.status(200).json({
            message: 'user added successfully'
        })
    }catch{
        res.status(500).json({
            errors: {
                common: {
                    msg: "unknown error occured "
                }
            }
        })
    }


}
module.exports = {getUsers,addUser};