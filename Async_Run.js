async= require('async'), // https://npmjs.org/package/async
newman= require('newman'), // change to require('newman'), if using outside this repository
options = {
collection: 'Import.postman_collection.json', //collection to be run
environment: 'QA.postman_environment.json', //your environment
globals: 'API Course API.postman_globals.json', //global variables
reporters: ['cli', 'html', 'json'],
timeout: {
request: 1800000,
script: 1800000
   },
  },
parallelCollectionRun= function (done) {
newman.run(options, done);
};

async.parallel([
parallelCollectionRun,
parallelCollectionRun,
parallelCollectionRun,
parallelCollectionRun
],
function (err, results){
err && console.error(err);

results.forEach(function (result) {
varfailures = result.run.failures;
console.info(failures.length? JSON.stringify(failures.failures, null, 2) :
`${result.collection.name} ran successfully.`);
});
});