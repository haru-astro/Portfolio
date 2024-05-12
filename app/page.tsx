import { BlogPosts } from './components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        こんにちは
      </h1>
      <p className="mb-4 ">
        {`早川晴です。`}
      </p>
      <p className="mb-4 ">
        {`現在東京大学教養学部前期課程理科一類B1で、後期から理学部天文学科に進学します。`}
      </p>
      
      <div className="my-8">
        <p className="mb-4">{'お知らせ・更新履歴'}</p>
        <ul>
          <li>2024/5/12　Portfolioを公開しました。</li>
        </ul>
      </div>
    </section>
  )
}
