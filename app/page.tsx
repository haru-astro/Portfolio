import { BlogPosts } from './components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <Image src="/images/Milkyway.jpg" width={700} height={400} alt="Twitter" />
      <h1 className="my-8 text-2xl font-semibold"> 
        Welcome to my portfolio
      </h1>
      <p className="mb-2 ">早川晴です。</p>
      <p className="mb-2 ">東京大学教養学部前期課程理科一類 学部１年で、後期から理学部天文学科に進学します。</p>
      
      <div className="my-6">
        <div className="mb-2 flex items-center">
          <h2 className="font-semibold tracking-tighter mr-2">{'お知らせ・更新履歴'}</h2>
        <div className="flex-grow h-0.5 bg-blue-400"></div>
        </div>
        <ul>
          <li>2024/5/12　Portfolioを公開しました。</li>
        </ul>
      </div>

      <div className="my-6">
        <div className="mb-2 flex items-center">
        <h2 className="font-semibold tracking-tighter mr-2">{'Education'}</h2>
        <div className="flex-grow h-0.5 bg-blue-400"></div>
      </div>
        <p className="mb-2">2024年4月〜現在　東京大学 教養学部（前期課程）理科一類</p>
        <p className="mb-2">2018年4月〜2024年3月　横浜市立横浜サイエンスフロンティア高等学校・附属中学校</p>
      </div>

      <div className="my-6">
      <div className="mb-2 flex items-center">
        <h2 className="font-semibold tracking-tighter mr-2">{'Award'}</h2>
      <div className="flex-grow h-0.5 bg-blue-400"></div>
      </div>
        <p className="mb-2">2023年8月　第16回国際天文学・天体物理学オリンピック　出場</p>
        <p className="mb-2">2023年3月　第2回日本天文学オリンピック　金賞</p>
        <p className="mb-2">2023年2月　第22回日本情報オリンピック　本選出場</p>
      </div>

      <div className="my-6">
      <div className="mb-2 flex items-center">
        <h2 className="font-semibold tracking-tighter mr-2">{'Activity'}</h2>
      <div className="flex-grow h-0.5 bg-blue-400"></div>
      </div>
        <p className="mb-2">2023年3月　第25回日本天文学会ジュニアセッション 講演45T、51T</p>
        <p className="mb-2">2022年12月　第12回もしも君が杜の都で天文学者になったら</p>
      </div>

      <div className="my-6">
      <div className="mb-2 flex items-center">
        <h2 className="font-semibold tracking-tighter mr-2">{'Outreach Activity'}</h2>
      <div className="flex-grow h-0.5 bg-blue-400"></div>
      </div>
        <p className="mb-2">2024年4月　第3回日本天文学オリンピック　代表研修合宿</p>
      </div>
    </section>
    
  )
}
