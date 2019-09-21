const ext = require('.')

const fixtures = [
  { argument: undefined, result: '' },
  { argument: 'test.js', result: '.js' },
  { argument: 'test.txt', result: '.txt' },
  { argument: 'test.css', result: '.css' },
  { argument: 'test.spec.js', result: '.js' },
  { argument: 'test.JS', result: '.js' },
  { argument: 'test', result: 'test' },
  { argument: '.test', result: '.test' },
  { argument: ['test.js', 'test.txt', 'test.css'], result: ['.js', '.txt', '.css'] }
]

describe.each(fixtures)(
  'ext',
  (testData) => {
    it(`when given ${testData.argument} should return ${testData.result}`, () => {
      expect(ext(testData.argument)).toEqual(testData.result);
    })
  },
);
