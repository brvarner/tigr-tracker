require('dotenv').config()
const fetch = require('node-fetch')
import * as pug from 'pug'
import * as express from 'express';
import * as path from 'path';
import * as nodemailer from 'nodemailer';
import * as cron from 'cron';
import * as morgan from 'morgan';

import apiRouter from './routes';
import { CronJob } from 'cron';

const app = express();

const transporter = nodemailer.createTransport({
    host: String(process.env.MAIL_HOST),
    port: Number(process.env.MAIL_PORT),
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// NodeMailer Tests
// Gonna find out how to redo these in the if statements tied to each CRONJOB
// Basically, we have to figure out how to send bulk emails to everyone on the list that's tied to each product
app.get('/email/text', (req, res) => {
    transporter.sendMail({
        from: '"moose" <me@moose.dev>',
        to: '"You there" <arthur.feest34@ethereal.email>',
        subject: 'First email',
        text: 'Hello, nice to meet you'
    })
        .then(info => res.send(info))
        .catch(error => res.send(error))
})

app.get('/email/html', (req, res) => {
    transporter.sendMail({
        from: '"moose" <me@moose.dev>',
        to: '"You there" <arthur.feest34@ethereal.email>',
        subject: 'Second email',
        html: '<h1>Hi again</h1> <p>This time we have used html!</p>'
    })
        .then(info => res.send(info))
        .catch(error => res.send(error))
})

app.get('/email/file', (req, res) => {
    let body = pug.renderFile('emails/email.pug')
    transporter.sendMail({
        from: '"moose" <me@moose.dev>',
        to: '"You there" <arthur.feest34@ethereal.email>',
        subject: 'Fourth email',
        html: body
    })
        .then(info => res.send(info))
        .catch(error => res.send(error))
})

// app.get('/test', (req, res) => {
//     fetch(process.env.JABRA_QTBLACK)
//     .then(res => res.json())
//     .then(data => { console.log(data)
//       if (data.products[0].onSale){
//     console.log(`Titanium Black Jabra Elite 75ts on Sale! Regular Price: ${data.products[0].regularPrice}, Sale Price: ${data.products[0].salePrice}`)
//     }
//     })
//     .catch(error => console.log(error))
// })


// CronJobs
let airpodCheck = new CronJob(
    '* * * * *',
    function () {
        fetch(process.env.AIRPOD_Q)
            .then(res => res.json())
            .then(data => {
                if (data.products[0].onSale) {
                    let body = pug.renderFile('emails/email.pug')
                    transporter.sendMail({
                        from: '"moose" <me@moose.dev>',
                        to: '"You there" <arthur.feest34@ethereal.email>',
                        subject: 'Fourth email',
                        html: body
                    })
                    console.log(`Airpods on Sale! Regular Price: ${data.products[0].regularPrice}, Sale Price: ${data.products[0].salePrice}`)
                }
            })
            .catch(error => console.log(error))
    },
    null,
    true,
    'America/Chicago'
);

airpodCheck.start()

let blackBeatsCheck = new CronJob(
    '* */2 * * *',
    function () {
        fetch(process.env.BEATS_QBLACK)
            .then(res => res.json())
            .then(data => {
                if (data.products[0].onSale) {
                    console.log(`Black Beats Fit Pros on Sale! Regular Price: ${data.products[0].regularPrice}, Sale Price: ${data.products[0].salePrice}`)
                }
            })
            .catch(error => console.log(error))
    },
    null,
    true,
    'America/Chicago'
);

blackBeatsCheck.start()

let grayBeatsCheck = new CronJob(
    '* */2 * * *',
    function () {
        fetch(process.env.BEATS_QGRAY)
            .then(res => res.json())
            .then(data => {
                if (data.products[0].onSale) {
                    console.log(`Sage Gray Beats Fit Pros on Sale! Regular Price: ${data.products[0].regularPrice}, Sale Price: ${data.products[0].salePrice}`)
                }
            })
            .catch(error => console.log(error))
    },
    null,
    true,
    'America/Chicago'
);

grayBeatsCheck.start()

let blackJabraCheck = new CronJob(
    '* * * * *',
    function () {
        fetch(process.env.JABRA_QBLACK)
            .then(res => res.json())
            .then(data => {
                if (data.products[0].onSale) {
                    console.log(`Black Jabra Elite 75ts on Sale! Regular Price: ${data.products[0].regularPrice}, Sale Price: ${data.products[0].salePrice}`)
                }
            })
            .catch(error => console.log(error))
    },
    null,
    true,
    'America/Chicago'
);

blackJabraCheck.start()

let titeJabraCheck = new CronJob(
    '* * * * *',
    function () {
        fetch(process.env.JABRA_QTBLACK)
            .then(res => res.json())
            .then(data => {
                if (data.products[0].onSale) {
                    console.log(`Titanium Black Jabra Elite 75ts on Sale! Regular Price: ${data.products[0].regularPrice}, Sale Price: ${data.products[0].salePrice}`)
                }
            })
            .catch(error => console.log(error))
    },
    null,
    true,
    'America/Chicago'
);

titeJabraCheck.start()

// Standard Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
