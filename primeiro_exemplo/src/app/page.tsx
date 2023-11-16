import Image from 'next/image'

export default function Home() {
  const myAge = 25;
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World!</h1>
      <p>Welcome to NextJS.</p>
      <p>Your age is ${myAge}</p>
    </main>
  )
}
