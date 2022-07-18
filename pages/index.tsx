import type { NextPage } from 'next'
import ClientCounter from '../components/client-counter.client'

const RscPage: NextPage = ({}) => {
  return (
    <main>
      <h1 className="page-title">Example Server Components</h1>
      <div className="flex-container">
        <ClientCounter />
      </div>
      <div>
        <a href="/rsc">サーバコンポーネントへ</a>
      </div>
    </main>
  )
}

export default RscPage
