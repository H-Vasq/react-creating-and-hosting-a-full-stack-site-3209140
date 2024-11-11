import express from 'express';
const app = express();
app.use(express.json());
const PORT = 3000;

// app.post('/', (req, res) => {
//   res.send(`Hello ${req.body.name}!`);
// });

// app.get('/hello/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`Hello ${name}!!`);
// })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
