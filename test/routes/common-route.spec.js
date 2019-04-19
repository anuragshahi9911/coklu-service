// var app = require('../../app')
// var request = require('supertest')
// const requests = require('../test-data/store-requests')
// var mocha = require('mocha')
// var chai = require('chai')
// var assert = chai.assert
// const sinon = require('sinon')
// var tokenService = require('../../services/token-service')
// var commonData = require('../../data/common-data')
// var commonDataMock = sinon.mock(commonData)
// var utilService = require('../../utils/util')
// var utilServiceMock = sinon.mock(utilService)
// mocha.describe('routes --> Common', function () {
//   mocha.before(() => {
//     commonDataMock = sinon.stub(commonData, 'getDataFromDB').resolves([{
//       name: 'app1',
//       subdomain: 'onehome.sit',
//       logo: 'logo1',
//       protocol: 'https'
//     },
//     {
//       name: 'app2',
//       subdomain: 'onehome.sit',
//       logo: 'logo2',
//       protocol: 'https'
//     }
//     ])
//   })
//   mocha.it('should respond with status 200 for app', function (done) {
//     request(app)
//       .get('/common/application')
//       .set('authorization', tokenService.createToken(requests.payload))
//       .expect('Content-Type', 'application/json; charset=utf-8')
//       .end(async function (err, res) {
//         if (err) { 
//           // console.log('error', err); 
//           return done(err) }
//         assert.notEqual(res.body, null)
//         assert.equal(res.status, 200)
//         done()
//       })
//   })
//   mocha.after(() => {
//     commonDataMock.restore()
//   })
// })
// mocha.describe('routes --> Common', function () {
//   mocha.before(() => {
//     utilServiceMock = sinon.stub(utilService, 'getCountry').returns([{
//       key: 'AF',
//       value: 'Afghanistan'
//     },
//     {
//       key: 'AX',
//       value: 'Åland Islands'
//     },
//     {
//       key: 'AL',
//       value: 'Albania'
//     }
//     ])
//   })
//   mocha.it('should respond with status 200 for countries', function (done) {
//     request(app)
//       .get('/common/country')
//       .set('authorization', tokenService.createToken(requests.payload))
//       .expect('Content-Type', 'application/json; charset=utf-8')
//       .end(async function (err, res) {
//         if (err) return done(err)
//         assert.notEqual(res.body, null)
//         // assert.instanceOf(FiltersResponse)
//         assert.isArray(res.body.values)
//         assert.equal(res.status, 200)
//         done()
//       })
//   })
//   mocha.after(() => {
//     utilServiceMock.restore()
//   })
// })
