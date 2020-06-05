// import '@babel/polyfill';
import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

import App from './app';

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
    const context = {};
    const content = ReactDomServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const html = `
        <html>
            <head>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="client_bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
})

app.listen(port, _ => {
    console.log(`App running on port ${port}`);
});