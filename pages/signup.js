import { useState } from 'react'
import MyNavbar from '../components/MyNavbar.js'
import SigninForm from '../components/SigninForm.js'
import useUser from '../lib/useUser'
import fetchJson from '../lib/fetchJson'

const Signup = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }

    try {
      mutateUser(
        await fetchJson('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }
  
  return (
    <>
      <MyNavbar />
      <SigninForm isSignUp errorMsg={errorMsg} onSubmit={handleSubmit}/>
    </>
  )
}

export default Signup
