import withSession from '../../lib/session'
import { connectToDatabase } from '../../lib/mongodb'

export default withSession(async (req, res) => {
  const { db } = await connectToDatabase()
  const { email, password } = await req.body
  const user = await db.collection('users').findOne({ email, password })
  if (!user) {
    res.status(404).json({message: 'email or password is incorrect.'})
  } else {
    user.isLoggedIn = true
    req.session.set('user', user)
    await req.session.save()
    res.json(user)
  }
})
