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
        {`東京大学教養学部前期課程理科一類 学部１年生で、後期から理学部天文学科に進学します。`}
      </p>
      
      <div className="my-8">
        <h2 className="mb-8 font-semibold tracking-tighter">{'お知らせ・更新履歴'}</h2>
        <ul>
          <li>2024/5/12　Portfolioを公開しました。</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="mb-8 font-semibold tracking-tighter">{'経歴'}</h2>
        <p className="mb-4">2024年4月〜現在　東京大学 教養学部（前期課程）理科一類</p>
        <p className="mb-4">2018年4月〜2024年3月　横浜市立横浜サイエンスフロンティア高等学校・附属中学校</p>
      </div>
    </section>
    
  )
}
