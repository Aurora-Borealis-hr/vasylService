const nock = require('nock')

nock('http://adsService')
.persist()
.get(() => true) .reply(200, {
  name : 'ad name',
  id: 123,
  url: 'some/url'
});
