'use strict';
// global imports
require("dotenv").config();

// app setting
module.exports = {
    defLang: process.env.DEFAULT_LANGUAGE,
    appName: process.env.APP_NAME,
    apiBaseURL: process.env.API_BASE_URL,
    appBaseURL: process.env.APP_BASE_URL,
    frontendBaseURL: process.env.FRONTEND_BASE_URL,
    rChilliBaseURL: process.env.RCHILLI_BASE_URL,
    rchilliIndexKey: process.env.INDEXKEY,
    sendgridKey: process.env.API_KEY,
    environment: process.env.NODE_ENV || 'development',
    state: process.env.STATE || 'local',
    port: process.env.PORT || 5042,
    wordDistance: 3,
    // AWS setting
    awsID: process.env.AWS_ID,
    awsSECRET: process.env.AWS_SECRET,
    awsBUCKET_NAME: process.env.AWS_BUCKETNAME,
    AWS_PUBLIC_BUCKETNAME: process.env.AWS_PUBLIC_BUCKETNAME,
    AWS_URL: process.env.AWS_URL,
    mapboxKey: process.env.MAPBOX_KEY,
    // sendgrid setting
    sendgrid: {
        user: process.env.SENDGRID_SENDER_USER,
    },
    // token setting
    jwt: {
        issuer: process.env.JWT_ISSUER,
        subject: process.env.JWT_SUBJECT,
        audience: process.env.JWT_AUDIENCE,
        expires_in: process.env.JWT_EXPIRES_IN,
        algorithm: process.env.JWT_ALGORITHM
    },
    // SMTP setting
    smtp: {
        service: process.env.SMTP_SERVICE,
        user: process.env.SMTP_USER,
        password: process.env.SMTP_PASSWORD
    }
};
