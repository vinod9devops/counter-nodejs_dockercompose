const express = require('express')
const router = express.Router()
const { createClient } = require("redis")

const KEY_COUNTER = "count";

// define the home page route
router.get('/', (req, res) => {
    res.send('This is a sample page for interview')
})

router.put('/count', async (req, res) => {
    const client = createClient({
        url: 'redis://redis:6379'
    });
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    let count = await client.get(KEY_COUNTER);


    if (count === null) {
        count = 0;
    }
    await client.set(KEY_COUNTER, ++count);

    return res.json({
        count
    })
})

module.exports = router 