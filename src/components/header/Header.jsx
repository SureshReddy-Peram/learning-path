import React from 'react'

const Header = (props) => {

    const {headerText, icon} = props;

  return (
    <>
      <div className="wrapper">
        <h1>{headerText}</h1>
        <span>{icon} </span>
      </div>
    </>
  )
}

export default Header
