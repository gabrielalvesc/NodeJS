const path = require('path')
const nodemailer = require('nodemailer');
const { host, port, user, pass } = require('../config/mail')
const hbs = require("nodemailer-express-handlebars")

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
        user,
        pass
    }
});

transport.use('compile', hbs({
    viewEngine: {
        partialsDir: "./src/resources/mail/",
        partialsDir: "./src/resources/mail/",
        defaultLayout: undefined,
        helpers: undefined,
        compilerOptions: undefined
    },
    viewPath: path.resolve('./src/resources/mail'),
    extName: '.html'
}))


module.exports = transport;