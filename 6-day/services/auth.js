const jwt = require("jsonwebtoken");

const signIn = async (body) => {
  const username = body.username;
  const password = body.password;

  if (username === "mustafa" && password === "123") {
    return generateToken(username);
  } else {
    console.log("buraya giriyor mu ?");
    return "giriş yapamadı, kullanıcı hatalı şifre veya kullancıı adı";
  }
};

const generateToken = (username) => {
  const token = jwt.sign({ istedigim: "buydu",buyuyecek:"veri" ,buyuyecekd:"veri" }, "cokgizli",{expiresIn:'2d'});
  return token;
};

module.exports = { signIn };
