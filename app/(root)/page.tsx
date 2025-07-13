// import { UserButton } from "@clerk/nextjs";

// const SetupPage = ()=> {
//   return (
//    <div className="p-4">
//      <UserButton />
//    </div>
//   );
// }

// export default SetupPage; 

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <h1>My App</h1>
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
