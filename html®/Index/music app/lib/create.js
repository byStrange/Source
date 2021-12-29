const fs = require('fs')
const _dirname = "../music"
var list = ''

function Direct(path) {
    var content = fs.readdirSync(path, {
        withFileTypes: true
    });
    for (s of content) {
        list += s.name + ';;__;;'
    }
}

Direct(_dirname)

var path = './package.js'
buffer = new Buffer(`let musics = ['${list}']`);

fs.open(path, 'w', function(err, fd) {
    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written to ' + path);
        })
    });
});

// console.log(list.toString())