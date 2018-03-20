const figlet = require('figlet');
const chalk = require('chalk');

const colorize = (msg, color) => {
    if(typeof color !== "undefined"){
        msg = chalk[color].bold(msg);
    }
    return msg
};

const log = (socket, msg, color) => {
    socket.write(colorize(msg, color) + "\n");
};

const biglog = (socket, msg, color) => {
    log(socket, figlet.textSync(msg), color);
};

const errorlog = (socket, msg) => {
    socket.write(`[${colorize("idError", "red")}] ${colorize(msg, "red")}\n`);
};

exports = module.exports = {
	colorize,
	log,
	biglog,
	errorlog
};
