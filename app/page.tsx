import { BlogPosts } from './components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        こんにちは
      </h1>
      <p className="mb-4 ">
        {`早川晴です。現在東京大学教養学部前期課程理科一類B1で後期から理学部天文学科に進学します。`}
      </p>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
