// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const courseObj = { name: 'React hooks in depth' }

export default function handler(req, res) {
  res.status(200).json(courseObj)
}

