import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="mx-auto px-6">
      <p className="mb-12 mt-12 text-center text-3xl text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Adrian</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}
