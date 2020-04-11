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
    type:'OAuth2',
    user: 'test@gmail.com',
    clientId:'your_cliente_id',
    clientSecret: 'your_secret_id'
  },
  auth2: {
    user: 'test@gmail.com',
    refreshToken: 'your_refresh_token',
    accessToken:'your_acces_token',
  },
  SECRET_TOKEN: "***********",
  corsOptions: {
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
};
