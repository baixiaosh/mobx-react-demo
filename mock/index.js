const proxy = {
  'POST /api/base/login': (req, res) => {
    const { password, username } = req.body;
    if (password === '123456' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {id: 1, username: 'admin', sex: 1 }
      });
    } else {
      return res.send({status: 'error', code: 403 });
    }
  }
}
module.exports = proxy;