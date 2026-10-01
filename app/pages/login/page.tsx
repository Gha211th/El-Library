import { SignIn } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn 
        path="/pages/login" 
        forceRedirectUrl="/pages/dashboard" 
        signUpUrl="/pages/register"
      />
    </div>
  )
}

export default page