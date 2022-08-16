const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello from my Smarty over women and man')
});

const users = [
    { id: 1, name: 'Abdullah', email: 'abdullah@gmail.com', phone: '0181234578' },
    { id: 2, name: 'Jsmin', email: 'jsmin@gmail.com', phone: '0181234578' },
    { id: 3, name: 'Ikbal', email: 'ikbal@gmail.com', phone: '0181234578' },
    { id: 4, name: 'Didar', email: 'didar@gmail.com', phone: '0181234578' },
    { id: 5, name: 'Kamal', email: 'kamal@gmail.com', phone: '0181234578' },
    { id: 6, name: 'Javed', email: 'javed@gmail.com', phone: '0181234578' },
    { id: 7, name: 'Janifer', email: 'Janifer@gmail.com', phone: '0181234578' },
]

app.get('/users', (req, res) => {
    console.log('query', req.query)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    };
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    console.log(id)
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})


app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})




app.get('/fruits/mango/maldari', (req, res) => {
    res.send('Sour Sound of maldari mango')
})

app.listen(port, () => {
    console.log('Listening to port', port)
})