import withSession from '../../lib/session'
import { connectToDatabase } from '../../lib/mongodb'

export default withSession(async (req, res) => {
  const user = req.session.get('user')

  if (user && user.isLoggedIn) {
    const { email } = user
    const { db } = await connectToDatabase()
    const { hostname, origin } = await req.body
    await db.collection('hosts').insertOne({ email, hostname, origin })
    res.json({status: 0})
  } else {
    res.redirect('/signin')
  }
})
