import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div
    className='flex flex-col items-center justify-center min-h-screen text-center '
    >
    <div className="text-center ">
       
        <h1 className="	text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
        
        Congratulations! You’ve found a secret level. Just kidding—this page doesn’t exist.
        </p>
        <p className="text-muted-foreground mb-4 max-w-md">
         but we’ve got plenty of others! <Link href="/" className='px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-primary transition'>Go home</Link>
        </p>
    </div>
    </div>
  )
}

export default NotFoundPage