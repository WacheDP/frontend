import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilAddressBook, cilBalanceScale, cilCash, cilFlightTakeoff, cilMediaRecord } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle, name: "Tools"
  },
  {
    component: CNavGroup, name: "Staff", to: "/Staff",
    icon: <CIcon icon={cilAddressBook} className='me-2' size='lg' />,
    items: [
      {
        component: CNavItem, name: "Employees List", to: "/Staff/EmployeeList",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      },
      {
        component: CNavItem, name: "Loans", to: "/Staff/Loans",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      },
      {
        component: CNavItem, name: "Daypay", to: "/Staff/Daypay",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      }
    ]
  },
  {
    component: CNavGroup, name: "Timebook", to: "/Timebook",
    icon: <CIcon icon={cilBook} className='me-2' size='lg' />,
    items: [
      {
        component: CNavItem, name: "Register", to: "/Timebook/Register",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      },
      {
        component: CNavItem, name: "See Timebooks", to: "/Timebook/See",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      }
    ]
  },
  {
    component: CNavGroup, name: "Vacations", to: "/Vacations",
    icon: <CIcon icon={cilFlightTakeoff} className='me-2' size='lg' />,
    items: [
      {
        component: CNavItem, name: "Register", to: "/Vacations/Register",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      },
      {
        component: CNavItem, name: "See Vacations", to: "/Vacations/See",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      }
    ]
  },
  {
    component: CNavGroup, name: "Settlement", to: "/Settlement",
    icon: <CIcon icon={cilBalanceScale} className='me-2' size='lg' />,
    items: [
      {
        component: CNavItem, name: "Request a Settlement", to: "/Settlement/Request",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      },
      {
        component: CNavItem, name: "See Settlements", to: "/Settlement/See",
        icon: <CIcon icon={cilMediaRecord} className='me-2' />
      }
    ]
  },
  {
    component: CNavItem, name: "Benefits", to: "/Benefits",
    icon: <CIcon icon={cilCash} className='me-2' size='lg' />
  }
];

export default _nav