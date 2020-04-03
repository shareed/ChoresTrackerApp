module.exports = (req, res, next) => {
    //check to see if we have a session and there is a user in that session
    if (req.session && req.session.user) {
        //if there is a user
        next()
      } else {
          //if no user
        res.status(401).json({ message: 'Please sign in to access this area' })
      }
}