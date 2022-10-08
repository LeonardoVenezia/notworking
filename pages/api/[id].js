// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import posts from './posts';

export default function handler(req, res) {
  const { id } = req.query;
  const post = posts.posts[id];
  res.status(200).json(post);
}
