import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('react-blog-db');

  const article = await db.collection('articles').findOne({ name });

  res.json(article);
});

app.put('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find(a => a.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
  } else {
    res.send('That article doesn\'t exist');
  }
});

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articlesInfo.find(a => a.name === name);
  if (article) {
      article.comments.push({ postedBy, text });
      res.send(article.comments);
  } else {
      res.send('That article doesn\'t exist');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
