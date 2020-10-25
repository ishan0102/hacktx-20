const fs = require("fs");

module.exports = async (filepath) => {
    fs.rename(filepath, filepath+'.mp4', () => { 
        console.log("\nFile Renamed!\n"); 
    }); 
}

