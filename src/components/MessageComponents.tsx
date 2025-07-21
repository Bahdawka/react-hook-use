import { use } from 'react'
import { fetchDataOptimized } from '../utils/api'
import type { UserInterface } from "../types/User.interface"

const MessageComponent = () => {
  const users: UserInterface[] = use(fetchDataOptimized)

  return (<ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
  )
}

export default MessageComponent