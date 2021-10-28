import * as React from 'react'
import * as config from 'lib/config'
import {FooterSocial} from './FooterSocial'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={"footer"}>
      <div className={"footer-left"}>Copyright 2021 {config.author}</div>
      <FooterSocial></FooterSocial>
      <div className={"footer-right"}></div>

    </footer>
  )
}
