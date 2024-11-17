import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import routes from '../routes'

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>

        <Routes>
          {
            routes
              .filter(route => route.element)
              .map((route, idx) => { <Route key={idx} path={route.path} name={route.name} element={<route.element />} /> })
          }

          <Route path="/" element={<Navigate to="/" replace />} />
        </Routes>

      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
