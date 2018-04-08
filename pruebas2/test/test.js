var chai = require('chai'),
	test_unit = require('../public/unit_test'),
	assert = chai.assert;


describe('PRUEBAS DE PROBLEMA 6, FRECUENCIA DE CLIENTES',function(){
	it('PRUEBA1, PROBANDO QUE EVALUE LOS 165 CLIENTES EXISTENTES EN LA DB', function(done){
		
		test_unit.prueba1(function(err, events){
			if(err) return done(error)
			assert.equal(events,165); //llamamos al modulo y solicitamos la funcinon		
			done()
		})
	})
})
