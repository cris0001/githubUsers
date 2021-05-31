import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import { GithubContext } from '../context/context'
import loadingImage from '../images/preloader.gif'

const Dashboard = () => {
  const { loading } = React.useContext(GithubContext)

  if (loading) {
    return (
      <main>
        <img src={loadingImage} alt='dasaasd' className='loading-img' />
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard
