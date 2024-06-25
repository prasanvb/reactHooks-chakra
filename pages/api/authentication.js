// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const authObject = {
  authToken: "23kj-nnu8-nf3u-n9uw4er3n",
  userId: 34543,
  isLoggedIn: true,
};

export default function handler(req, res) {
  res.status(200).json(authObject);
}
