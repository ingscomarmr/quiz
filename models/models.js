//cargar el path
var path = require('path');

//trabajando con los path de base de datos
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6]||null);
var user = (url[2]||null);
var pwd = (url[3]||null);
var protocol = (url[1]||null);
var dialect = (url[1]||null);
var port = (url[5]||null);
var host = (url[4]||null);
var storage = process.env.DATABASE_STORAGE;

//cargar el modelo ORM
var Sequelize = require('sequelize');

//usar DB SQLite
var sequelize = new Sequelize(DB_name,user,pwd,
			{
				dialect:protocol, 
				protocol:protocol,
				port:port,
				host:host,							
				strorage:storage, //solo para SQLite
				omitNull:true //solo para Postgres
			);

//Importar la definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz; //exporta la definicion de tabla

sequelize.sync().then(function(){

	Quiz.count().then(function(count){
		if (count===0) {
			Quiz.create({pregunta:'Capital de Italia',
						 respuesta:'Roma'
						});
		};		
	});

});