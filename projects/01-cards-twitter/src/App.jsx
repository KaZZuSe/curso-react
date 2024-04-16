import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]
export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      }
      <TwitterFollowCard userName='usee3mtn' initialIsFollowing>
        Tao Pai Pai
      </TwitterFollowCard>
    </section>
  )
}
