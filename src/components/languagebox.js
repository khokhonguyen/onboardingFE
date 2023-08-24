import React from "react"
import { Link } from "react-router-dom"

const Languagebox = ({ location }) => {
  let pageName = location.pathname

  if (pageName.includes("/el")) {
    pageName = pageName.split("/")[2]
  }

  let greekPagePath = `/el/${pageName}`

  return (
    <div>
      <Link to={pageName}>EN</Link>
      <Link to={greekPagePath}>VI</Link>
    </div>
  )
}

export default Languagebox