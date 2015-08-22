// 	###### DEFINICION DEL MODELO DE QUIZ #####
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Quiz', //nombre de la tabla
		{ pregunta: DataTypes.STRING, //nombre columna y tipo
		  respuesta: DataTypes.STRING
		});
};