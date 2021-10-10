import React from 'react'
import withAuth from '../../utils/withAuth'

function UserRequests() {
  return (
    <div>
      User Requests
    </div>
  )
}

export default withAuth(UserRequests)
