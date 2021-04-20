import consola from 'consola'

require('chai').should();

import {A} from '../src'

it('test A should be A', function () {
  A.should.equal('A')
})
