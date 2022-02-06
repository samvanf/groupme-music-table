const express = require('express');

const app = express();
const axios = require('axios');


app.get("/api/posts", (req, res) => {
    axios.get(`https://api.groupme.com/v3/groups/${process.env.MUSIC_GROUP_ID}/messages?token=${process.env.GROUPME_TOKEN}`)
        .then(result => {
            res.status(200).json({
                messages: result.data.response.messages
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