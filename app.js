const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

let history = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    console.log(`Received num1: ${num1}, num2: ${num2}, operation: ${operation}`);
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    if (isNaN(n1) || (['add', 'subtract', 'multiply', 'divide', 'power'].includes(operation) && isNaN(n2))) {
        result = 'Invalid input';
    } else {
        switch (operation) {
            case 'add':
                result = n1 + n2;
                break;
            case 'subtract':
                result = n1 - n2;
                break;
            case 'multiply':
                result = n1 * n2;
                break;
            case 'divide':
                result = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
                break;
            case 'power':
                result = Math.pow(n1, n2);
                break;
            case 'sin':
                result = Math.sin(n1);
                break;
            case 'cos':
                result = Math.cos(n1);
                break;
            case 'tan':
                result = Math.tan(n1);
                break;
            case 'log':
                result = Math.log(n1);
                break;
            default:
                result = 'Invalid operation';
        }
    }

    const historyItem = `${num1} ${operation} ${num2 ? num2 : ''} = ${result}`;
    history.push(historyItem);
    if (history.length > 10) {
        history.shift(); // Keep only the last 10 calculations
    }

    console.log(`Result: ${result}`);
    res.send(`${result}`);
});

app.get('/history', (req, res) => {
    res.json({ history });
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
