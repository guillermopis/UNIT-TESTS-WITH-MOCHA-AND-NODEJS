var valor;
		var valor2=0;
		var hhtp = require('http');
		var Conexion = require('tedious').Connection;
		var Request = require('tedious').Request;
		var TYPES = require('tedious').TYPES;
		var configuracion ={
			userName: 'user2',
			password: '123',
			server: '192.168.43.29',
			database: 'ComputerDB',
		};

const prueba1 = callback =>{
		valor2 =0;
	var conexion = new Conexion(configuracion);
	conexion.on('connect', function(err){
		if(err){
			console.log(err);
		}else{
			//console.log('CONEXION EXITOSA');
			var consulta2 ="select c.idCliente, c.nombreCliente "+
				",isnull((round((cast((DATEDIFF(day,MIN(s.fecha),max(s.fecha)))as float)/"+
				"(count(distinct fecha))),2,0)),0)as frecuencia_en_dias "+
				"from Clientes c "+
				"left join Salida s on s.idCliente = c.idCliente "+
				"left join SalidaDetalle sa on sa.idSalida = s.idSalida "+
				"group by c.idCliente, c.nombreCliente "+
				"order by frecuencia_en_dias asc";
	//hacemos la consulta, 
  	request = new Request(consulta2, function(err){
  		if(err){
  			console.log(consulta2);
  			console.log(err);
  		}

  		conexion.close();
  		//console.log('cerre la conexion');
  		callback(null,valor2);
  	});

  	request.on('doneInProc', function (rowCount, more) {
			   valor2 = rowCount;
			});

  	conexion.execSql(request);
		}
	});
	//console.log('filas valor2: '+valor2);	
} //fin de prueba1

module.exports = {
	prueba1
}