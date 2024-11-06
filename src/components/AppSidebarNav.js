import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'

function navLink(name, icon, badge) {
  const elements = []

  if (icon) {
    elements.push(icon)
  }

  if (name) {
    elements.push(name)
  }

  if (badge) {
    elements.push(
      <CBadge color={badge.color} className='ms-auto'>{badge.text}</CBadge>
    )
  }

  return <div>{elements}</div>
}

function navItem(item, index) {
  const { component, name, badge, icon, ...rest } = item
  const Component = component
  const elements = []

  if (rest.to || rest.href) {
    const navLinkProps = {}
    if (rest.to) {
      navLinkProps.as = NavLink
    }
    elements.push(
      <CNavLink {...navLinkProps} {...rest}>{navLink(name, icon, badge)}</CNavLink>
    )
  }
  else {
    elements.push(navLink(name, icon, badge))
  }

  return (
    <Component as="div" key={index}>{elements}</Component>
  )
}

function navGroup(item, index) {
  const { component, name, icon, items, to, ...rest } = item
  const Component = component

  function renderSubItems(subItems) {
    if (subItems) {
      return (
        subItems.map(
          function (subItem, subIndex) {
            if (subItem.items) {
              return navGroup(subItem, subIndex)
            }
            else {
              return navItem(subItem, subIndex)
            }
          }
        )
      )
    }
    else {
      return null
    }
  }

  const main = (
    <Component compact as="div" key={index} toggler={navLink(name, icon)}>
      {renderSubItems(item.items)}
    </Component>
  )

  return main
}

export function AppSidebarNav(props) {
  const { items } = props

  function renderItems(items) {
    if (items) {
      return items.map(
        function (item, index) {
          if (item.items) {
            return navGroup(item, index)
          }
          else {
            return navItem(item, index)
          }
        }
      )
    }
    else {
      return null
    }
  }

  return <CSidebarNav as={SimpleBar}>{renderItems(items)}</CSidebarNav>
}

AppSidebarNav.propTypes = { items: PropTypes.arrayOf(PropTypes.any).isRequired }