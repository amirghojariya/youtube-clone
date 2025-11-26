'use client'
import React, { useEffect } from 'react'

const Page = () => {
  
  useEffect(() => {
    console.log("where am i rendered")
    
  }, [])

  return (
    <div>
       Feed page
    </div>
  )
}

export default Page