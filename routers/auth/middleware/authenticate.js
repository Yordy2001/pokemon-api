module.exports = (req, res, next ) =>{
    
    res.send("middlware correct")

    next()
}
