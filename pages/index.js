import { useState } from 'react'
import MyNavbar from '../components/MyNavbar.js'
import SiteList from '../components/SiteList.js'
import AddHostForm from '../components/AddHostForm.js'
import useUser from '../lib/useUser'
import fetchJson from '../lib/fetchJson'
import useSWR from 'swr'
import Router from 'next/router'

const Home = () => {
  const { user } = useUser({ redirectTo: '/signin' })
  const { data: hosts } = useSWR('/api/hosts')

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {
      hostname: e.currentTarget.hostname.value,
      origin: e.currentTarget.origin.value
    }

    try {
        await fetchJson('/api/addhosts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        setErrorMsg('Success')
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  return (
    <>
      <MyNavbar />
      <SiteList hosts={hosts || []}/>
      <AddHostForm errorMsg={errorMsg} onSubmit={handleSubmit} />
    </>
  )
}

export default Home
