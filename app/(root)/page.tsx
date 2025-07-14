// import { UserButton } from "@clerk/nextjs";

// const SetupPage = ()=> {
//   return (
//    <div className="p-4">
//      <UserButton /> i  sko nikal k neeche wala
//       <Modal tittle="Test" description="Test description" isOpen onClose={()=>{}}> Children</Modal> 
//    </div>
//   );
// }

// export default SetupPage; 


"use client";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <h1>Root page</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <Header />
        {children}
      </ClerkProvider>
    </html>
  )
}
