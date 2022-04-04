const prompt = require("prompt"),
    script = require('./index');

prompt.start()

prompt.get(['path'], function (err, result) {
    script.getBenchmarkTest(result.path)
});