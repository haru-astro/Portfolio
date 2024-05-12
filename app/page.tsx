import { BlogPosts } from './components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <Image src="https://github.com/haru-astro/portfolio/blob/main/public/images/Milkyway.jpg?raw=true" width={700} height={400} alt="Milkyway" />
      <h1 className="my-8 text-2xl font-semibold"> 
        Welcome to my portfolio！
      </h1>
      <p className="mb-2 ">早川晴です。</p>
      <p className="mb-2 ">東京大学教養学部前期課程理科一類 学部１年で、後期から理学部天文学科に進学します。</p>
      <p className="mb-2 ">現在は天文学、特に恒星物理や星形成分野に興味があります。</p>
      <p className="mb-2 ">また、一般社団法人日本天文学オリンピック委員会(<a href="https://iaojapan.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">HP</a>)にも所属しています。</p>
      
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
        <p className="mb-2">2023年8月　第16回国際天文学・天体物理学オリンピック　出場(<a href="https://youtu.be/qBhWPSIasmU?t=7974" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">YouTube</a>)</p>
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
        <p className="mb-2">2024年4月　第3回日本天文学オリンピック代表研修合宿(平塚市博物館)　講師</p>
        <p className="mb-2">2022年10月　プラネタリウムで星の観測(瀬谷センター)　観測補助</p>
        <p className="mb-2">2022年4月　ヨコハマみらいワークショップ(ぴおシティ)　出展</p>
      </div>

      <div className="my-6">
      <div className="mb-2 flex items-center">
        <h2 className="font-semibold tracking-tighter mr-2">{'Contact'}</h2>
      <div className="flex-grow h-0.5 bg-blue-400"></div>
      </div>
        <p className="mb-2">Mail : haruhayakawa(at)g.ecc.u-tokyo.ac.jp</p>
      </div>
    </section>
    
  )
}
