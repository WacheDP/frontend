import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

/*
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
*/

const Login = React.lazy(() => import('./views/pages/login/Login.js'))

function Waiting() {
  return (
    <div className="pt-3 text-center">
      <CSpinner color="primary" variant="grow" />
    </div>
  )
}

export function Application() {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => {
    state.theme
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, [])

  /*
<Route path="/" name="Dashboard" element={<DefaultLayout />} />
          <Route path="/register" name="Register Page" element={<Register />} />
          <Route path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Page 404" element={<Page404 />} />
*/

  return (
    <HashRouter>
      <Suspense fallback={<Waiting />}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
