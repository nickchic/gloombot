import fs from 'fs';
import util from 'util';

var log_file = fs.createWriteStream('./debug.log', {flags : 'a'});
var log_stdout = process.stdout;

const log = (x) => {
  log_file.write(util.format(x) + '\n');
  log_stdout.write(util.format(x) + '\n');
}

export default log