import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CHeader, CHeaderNav, CHeaderToggler,
  CNavLink, CNavItem, useColorModes
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu, cilMoon, cilSun } from '@coreui/icons'
import { AppHeaderDropdown } from './header/index'

function AppHeader() {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  function Menu() {
    dispatch({ type: 'set', sidebarShow: !sidebarShow })
  }

  function SetIcon() {
    let icon

    switch (colorMode) {
      case 'dark':
        icon = <CIcon icon={cilMoon} size="lg" />
        break

      case 'light':
        icon = <CIcon icon={cilSun} size="lg" />
        break
    }

    return icon
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
      }
    })
  }, [])

  return (
    <CHeader position='sticky' className='mb-4 p-0' ref={headerRef}>
      <CContainer className='border-bottom px-4' fluid>
        <CHeaderToggler onClick={Menu} style={{ marginInlineStart: "-14px" }}>
          <CIcon icon={cilMenu} size='lg' />
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex">
          <CNavItem><CNavLink to="/" as={NavLink}>Dashboard</CNavLink></CNavItem>
          <CNavItem><CNavLink href="#">Users</CNavLink></CNavItem>
          <CNavItem><CNavLink href='#'>Role</CNavLink></CNavItem>
        </CHeaderNav>

        <CHeaderNav className="ms-auto">
          <CNavItem><CNavLink href="#"><CIcon icon={cilBell} size="lg" /></CNavLink></CNavItem>
          <CNavItem><CNavLink href="#"><CIcon icon={cilList} size="lg" /></CNavLink></CNavItem>
          <CNavItem><CNavLink href="#"><CIcon icon={cilEnvelopeOpen} size="lg" /></CNavLink></CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <li className="nav-item py-1"><div className="vr h-100 mx-2 text-body text-opacity-75"></div></li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={true}>{SetIcon}</CDropdownToggle>

            <CDropdownMenu>
              <CDropdownItem active={colorMode === 'light'} className="d-flex align-items-center" as="button"
                type="button" onClick={() => setColorMode('light')}>
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>

              <CDropdownItem active={colorMode === 'dark'} className="d-flex align-items-center" as="button"
                type="button" onClick={() => setColorMode('dark')}>
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

          <li className="nav-item py-1"><div className="vr h-100 mx-2 text-body text-opacity-75"></div></li>

          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader