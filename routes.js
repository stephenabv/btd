const express = require('express');
const pool = require('./db');
const multer = require('multer');
const upload = multer();

const router = express.Router();

// GET the cctv_package
router.get('/packages', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM cctv_package');
        // Convert the image data to base64-encoded strings
        rows.forEach(row => {
            row.image = `data:image/jpeg;base64,${row.image.toString('base64')}`;
        });
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    }
});
// UPDATE the cctv_package
router.post('/packages', upload.single('image'), async (req, res) => {
    const { name, price, description } = req.body;
    const image = req.file.buffer;

    const insertQuery = 'INSERT INTO cctv_package (name,image,price,description) VALUES ($1,$2,$3,$4)';
    const values = [name, image, price, description];

    try {
        const client = await pool.connect();
        await client.query(insertQuery, values);
        res.send('Data Saved Successfully');
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Saving Data')
    }
})
// DELETE the cctv_package
router.delete('/packages/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM cctv_package WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});

// Internet Connection Offers
/* This is a GET request to the database. */
router.get('/internet', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM internet');
        // Convert the image data to base64-encoded strings
        rows.forEach(row => {
            row.image = `data:image/jpeg;base64,${row.image.toString('base64')}`;
        });
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    }
});

/* This is a POST request to the database. */
router.post('/internet', upload.single('image'), async (req, res) => {
    const { name, price, info } = req.body;
    const image = req.file.buffer;

    const insertQuery = 'INSERT INTO internet (name,image,price,info) VALUES ($1,$2,$3,$4)';
    const values = [name, image, price, info];

    try {
        const client = await pool.connect();
        await client.query(insertQuery, values);
        res.send('Data Saved Successfully');
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Saving Data')
    }
})

/* This is a DELETE request to the database. */
router.delete('/internet/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM internet WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});


// Structure Cabling
/* This is a GET request to the database. */
router.get('/cable', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM cable');
        // Convert the image data to base64-encoded strings
        rows.forEach(row => {
            row.image = `data:image/jpeg;base64,${row.image.toString('base64')}`;
        });
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    }
});

/* This is a POST request to the database. */
router.post('/cable', upload.single('image'), async (req, res) => {
    const { name, price, info } = req.body;
    const image = req.file.buffer;

    const insertQuery = 'INSERT INTO cable (name,image,price,info) VALUES ($1,$2,$3,$4)';
    const values = [name, image, price, info];

    try {
        const client = await pool.connect();
        await client.query(insertQuery, values);
        res.send('Data Saved Successfully');
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Saving Data')
    }
})

/* This is a DELETE request to the database. */
router.delete('/cable/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM cable WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});

// Home Automation
/* This is a GET request to the database. */
router.get('/homeauto', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM home_auto');
        // Convert the image data to base64-encoded strings
        rows.forEach(row => {
            row.image = `data:image/jpeg;base64,${row.image.toString('base64')}`;
        });
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    }
});

/* This is a POST request to the database. */
router.post('/homeauto', upload.single('image'), async (req, res) => {
    const { name, price, info } = req.body;
    const image = req.file.buffer;

    const insertQuery = 'INSERT INTO home_auto (name,image,price,info) VALUES ($1,$2,$3,$4)';
    const values = [name, image, price, info];

    try {
        const client = await pool.connect();
        await client.query(insertQuery, values);
        res.send('Data Saved Successfully');
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Saving Data')
    }
})

/* This is a DELETE request to the database. */
router.delete('/homeauto/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM home_auto WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});

// Web Development
/* This is a GET request to the database. */
router.get('/webdevelopment', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM webdev');
        // Convert the image data to base64-encoded strings
        rows.forEach(row => {
            row.image = `data:image/jpeg;base64,${row.image.toString('base64')}`;
        });
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    }
});

/* This is a POST request to the database. */
router.post('/webdevelopment', upload.single('image'), async (req, res) => {
    const { name, price, info } = req.body;
    const image = req.file.buffer;

    const insertQuery = 'INSERT INTO webdev (name,image,price,info) VALUES ($1,$2,$3,$4)';
    const values = [name, image, price, info];

    try {
        const client = await pool.connect();
        await client.query(insertQuery, values);
        res.send('Data Saved Successfully');
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Saving Data')
    }
})

/* This is a DELETE request to the database. */
router.delete('/webdevelopment/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM webdev WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});

// T-Shirt Printing
/* This is a GET request to the database. */
router.get('/t-shirt', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM shirt');
        // Convert the image data to base64-encoded strings
        rows.forEach(row => {
            row.image = `data:image/jpeg;base64,${row.image.toString('base64')}`;
        });
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    }
});

/* This is a POST request to the database. */
router.post('/t-shirt', upload.single('image'), async (req, res) => {
    const { name, price, info } = req.body;
    const image = req.file.buffer;

    const insertQuery = 'INSERT INTO shirt (name,image,price,info) VALUES ($1,$2,$3,$4)';
    const values = [name, image, price, info];

    try {
        const client = await pool.connect();
        await client.query(insertQuery, values);
        res.send('Data Saved Successfully');
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Saving Data')
    }
})

/* This is a DELETE request to the database. */
router.delete('/t-shirt/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM shirt WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});

// Shop
/* This is a GET request to the database. */
router.get('/shop', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM shop');
        // Convert the image data to base64-encoded strings
        rows.forEach(row => {
            row.image = `data:image/jpeg;base64,${row.image.toString('base64')}`;
        });
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    }
});

/* This is a POST request to the database. */
router.post('/shop', upload.single('image'), async (req, res) => {
    const { name, price, info } = req.body;
    const image = req.file.buffer;

    const insertQuery = 'INSERT INTO shop (name,image,price,info) VALUES ($1,$2,$3,$4)';
    const values = [name, image, price, info];

    try {
        const client = await pool.connect();
        await client.query(insertQuery, values);
        res.send('Data Saved Successfully');
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Saving Data')
    }
})

/* This is a DELETE request to the database. */
router.delete('/shop/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM shop WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});

// Contact Form
// POST
router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const client = await pool.connect();
        const result = await client.query(
            'INSERT INTO contact_form (name, email, message) VALUES ($1,$2,$3) RETURNING id', [name, email, message]
        );
        const insertedId = result.rows[0].id;
        res.status(201).json({ id: insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
// GET
router.get('/contact', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM contact_form');
        // Convert the image data to base64-encoded strings
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json('Error retrieving data from database');
    }
});
// DELETE
router.delete('/contact/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM contact_form WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting package');
        } else {
            console.log(`Package with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});

// Appointment Form

/* This is a POST request to the database. */
router.post('/appointment', async (req, res) => {
    try {
        const { name, email, contact_number, date, time, reason } = req.body;
        const client = await pool.connect();
        const result = await client.query(
            'INSERT INTO contact_info (name, email, contact_number, date, time, reason) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id', [name, email, contact_number, date, time, reason]
        );
        const insertedData = result.rows[0].id;
        res.status(201).json({ id: insertedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

/* This is a GET request to the database. */
router.get('/appointment', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM contact_info');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json('Error retrieving data from database');
    }
});

/* This is a DELETE request to the database. */
router.delete('/appointment/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Invalid request');
    }

    const query = 'DELETE FROM contact_info WHERE id = $1';

    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting information');
        } else {
            console.log(`Appointment with ID ${id} deleted successfully`);
            res.status(200).send('Package deleted successfully');
        }
    });
});


module.exports = router;
