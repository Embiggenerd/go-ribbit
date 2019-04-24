module.exports = (req, res, next) => {
  if (typeof req.cookies.token !== 'undefned') {
    try {
      res.clearCookie('token');
      res.json({ cookieStatus: 'cleared' });
    } catch(e){
      console.log("logout e", e)
      next(e)
    }
  }
};
