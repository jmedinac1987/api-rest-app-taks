module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://localhost:27017/tasks',
  optionsDB: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  auth: {
    type: "OAuth2",
    user: "****************@gmail.com",
    accessToken:
      "**********",
    clientId:
      "*****************",
    clientSecret: "*************",
    refreshToken:
      "*************",
    expires: 1587247926190 + 60000,
    accessUrl: "https://oauth2.googleapis.com/token",
  },
  SECRET_TOKEN: "***********",
  corsOptions: {
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
};
