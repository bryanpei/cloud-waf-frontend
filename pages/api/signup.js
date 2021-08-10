import withSession from '../../lib/session'
import { connectToDatabase } from '../../lib/mongodb'

export default withSession(async (req, res) => {
  const { db } = await connectToDatabase()
  const { email, password } = await req.body
  if (await db.collection('users').findOne({ email })) {
    res.status(403).json({message: 'user already exists.'})
  } else {
    await db.collection('users').insertOne({ email, password })
    const user = { isLoggedIn: true, email, password }
    req.session.set('user', user)
    await req.session.save()
    res.json(user)
  }
})
