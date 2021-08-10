import { useState } from 'react'
import MyNavbar from '../components/MyNavbar.js'
import SigninForm from '../components/SigninForm.js'
import useUser from '../lib/useUser'
import fetchJson from '../lib/fetchJson'

const Signin = () => {
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
        await fetchJson('/api/signin', {
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
      <SigninForm errorMsg={errorMsg} onSubmit={handleSubmit}/>
    </>
  )
}

export default Signin
