"use client";

import { SignUp } from '@clerk/react'

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp signInUrl="/pages/login" forceRedirectUrl={"/pages/dashboard"} />
    </div>
  )
}

export default page
