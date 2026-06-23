import React from 'react'

export default function LogicalAndOperator() {
  
  const unreadMessage = ["Hi","Hello","Welcome"]
    return (
    <div>
        {unreadMessage.length >0 && (<h2>
            You have {unreadMessage.length} Unread Messages.
        </h2>)}
    </div>
  )
}
