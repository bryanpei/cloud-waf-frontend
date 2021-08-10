import withSession from '../../lib/session'
import { connectToDatabase } from '../../lib/mongodb'

export default withSession(async (req, res) => {
  const user = req.session.get('user')

  if (user && user.isLoggedIn) {
    const { email } = user
    const { db } = await connectToDatabase()
    const hosts = await db.collection('hosts').find({ email })
    res.json(await hosts.toArray())
  } else {
    res.json([])
  }
})
