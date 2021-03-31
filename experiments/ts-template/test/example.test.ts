const consola = require('consola')

require('chai').should();

const {A} = require('../../')

it('test A should be A', function () {
  A.should.equal('A')
})
