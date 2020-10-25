const fs = require("fs");

async function rename(filepath) {
    fs.rename(filepath, filepath+'.mp4', () => { 
        console.log("\nFile Renamed!\n");
    }); 
    return {name: filepath+'.mp4'};
}

var ffmpeg = require('fluent-ffmpeg');
/**
 *    input - string, path of input file
 *    output - string, path of output file
 *    callback - function, node-style callback fn (error, result)        
 */
async function audio(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', function() {                    
            console.log('conversion ended');
            callback(null);
            return Promise.resolve();
        }).on('error', function(err){
            console.log(err);
            callback(err);
        }).run();
}

module.exports = { rename, audio };
