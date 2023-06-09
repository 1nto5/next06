import getFormattedDate from '@/lib/getFormattedDate'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams() {
  const posts = getSortedPostsData() //deduped!

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { postId: string }
}) {
  const posts = getSortedPostsData() //deduped!
  const { postId } = params

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData() //deduped!
  const { postId } = params

  if (!posts.find((post) => post.id === postId)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className="prose prose-xl prose-invert prose-slate mx-auto px-6">
      <h1 className="mb-0 mt-4 text-3xl">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  )
}
