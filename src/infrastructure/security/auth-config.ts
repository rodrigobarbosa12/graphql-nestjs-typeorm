const authConfig = {
  saltRounds: 10,
  secret: process.env.SECRET,
  expiresIn: '1d',
}

export default authConfig
