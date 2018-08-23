module.exports = {
	port: process.env.PORT || 3000,
	db: process.env.MONGODB || 'mongodb://localhost:27017/tasks',
	optionsDB: {useNewUrlParser: true},
	SECRET_TOKEN: '$uNicat20li128YY99nt$$'
}
