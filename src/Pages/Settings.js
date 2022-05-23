import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NotLogged, SettingsPage } from '../Components/Settings'

const Settings = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className='main-settings-page'>
      {isAuthenticated ? <SettingsPage /> : <NotLogged />}
    </div>
  )
}

export default Settings
