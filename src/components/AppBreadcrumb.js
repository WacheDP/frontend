import React from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../routes'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

function AppBreadcrumb() {
  const currentLocation = useLocation().pathname

  function getRouteName(pathname, routes) {
    const currentRoute = routes.find(
      function (route) {
        let currentRoute = null

        for (let i = 0; i < route.length; i++) {
          if (route[i].path == pathname) {
            currentRoute = route[i]
            break
          }
        }

        return currentRoute
      })

    if (currentRoute) {
      return currentRoute.name
    }
    else {
      return false
    }
  }

  function getBreadcrumbs(location) {
    const breadcrumbs = []
    location.split('/').reduce(
      function (prev, curr, index, array) {
        const currentPathname = `${prev}/${curr}`
        const routeName = getRouteName(currentPathname, routes)

        let isActive = false

        if (index + 1 == array.length) {
          isActive = true
        }

        if (routeName) {
          breadcrumbs.push({ pathname: currentPathname, name: routeName, active: isActive })
        }

        return currentPathname
      })

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>

      {breadcrumbs.map(
        function (breadcrumb, index) {
          let breadcrumbProps = {}

          if (breadcrumb.active) {
            breadcrumbProps.active = true
          }
          else {
            breadcrumbProps.href = breadcrumb.pathname
          }

          return <CBreadcrumbItem {...breadcrumbProps} key={index} >{breadcrumb.name}</CBreadcrumbItem>
        })}

    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)