module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://jmedinac1987:Yisela1987@ds159772.mlab.com:59772/tasks',
  optionsDB: { useNewUrlParser: true },
  email: 'infojorgemedinawebsite@gmail.com',
  key: 'by$J3025*D3$aFik*E',
  SECRET_TOKEN: '$uNicat20li128YY99nt$$',
  corsOptions: {    
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
};
