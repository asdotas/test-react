
import React, { useContext } from 'react'
import { AdminFlagContext } from '../providers/AdminFlagProvider'

const Test = () => {
  const conTextValue = useContext(AdminFlagContext);
  console.log(conTextValue);

  return (
    <div>

    </div>
  )
}

export default Test