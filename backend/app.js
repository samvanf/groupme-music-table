const express = require('express');

const app = express();
const axios = require('axios');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET');
    next();
});


app.get("/api/posts", (req, res) => {
    axios.get(`https://api.groupme.com/v3/groups/${process.env.MUSIC_GROUP_ID}/messages?token=${process.env.GROUPME_TOKEN}`)
        .then(result => {
            const messagesOrig = result.data.response.messages;
            const newMessageData = messagesOrig.map((message) => {
                return {
                    created_at: message.created_at,
                    name: message.name,
                    text: message.text,
                    source_guid: message.source_guid
                }
            });
            res.status(200).json({
                messages: newMessageData
            });
        })
        .catch(err => {
            res.status(400).json({
                message: 'Unable to authenticate to GroupMe'
            });
        });
});

app.use((req, res) => {
    res.json({
        message: 'hello world!'
    })
})

module.exports = app;