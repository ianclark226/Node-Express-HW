const express = require('express');

const router = express.Router();

router.get('/burgers', async (_, res) => {
const data = await db.Burger.findAll();

res.json(data);
});

router.post('/burger/new', async (_, res) => {
    const {name} = req.body;

    await db.Burger.creat({

        isDevoured: true
    });

    res.status(200).end();
});

router.put('/burger/:id/devour', async (req, res) => {
    const { id } = req.param;

    await db.Burger.update({
        isDevoured: true
    }, {
        where: {
            id
        }
    })
});

module.exports = router;