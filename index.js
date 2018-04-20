const fs = require('fs')
const path = require('path');

module.exports = function(filename, options){
  throw new Error('not implemented yet. use `.sync`');
}

function isExists(p){
  try{
    return fs.existsSync(p);
  }catch(e){
    // ignore
    return false;
  }
}

module.exports.sync = function(filename, options){
  const opts = Object.assign({cwd: process.cwd()}, options);
  filename = [].concat(filename); // convert to array
  let dir = opts.cwd;
  const results = [];
  while (path.dirname(dir) !== dir){

    filename.forEach((f)=>{
      const p = path.join(dir, f)
      if (isExists(p)){
        results.push(p);
      }
    })
    dir = path.dirname(dir);
  }
  return results;

}
