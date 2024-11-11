import express from 'express';
const app = express();
app.use(express.json());
const PORT = 3000;

let articlesInfo = [{
  name: 'learn-react',
  upvotes: 0,
}, {
  name: 'learn-node',
  upvotes: 0,
}, {
  name: 'mondodb',
  upvotes: 0,
}]


// app.post('/', (req, res) => {
//   res.send(`Hello ${req.body.name}!`);
// });

// app.get('/hello/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`Hello ${name}!!`);
// })

app.put('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find(a => a.name === name);
  if (article) {
  article.upvotes += 1;
  res.send(`The ${name} article now has ${article.upvotes} upvotes`);
  } else {
    res.send('That article doesn\'t exist');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
