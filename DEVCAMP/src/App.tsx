import { useState, useEffect, Fragment } from 'react'
import TheLoader from './components/TheLoader'
import TodoItem from './components/TodoItem'

export type Todos = Todo[]
export interface Todo {
  id: string
  order: number
  title: string
  done: boolean
  createdAt: string
  updatedAt: string
}

export default function App() {
  // 구조 분해 할당
  const [todos, setTodos] = useState<Todos>([]) //never[]
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true) //로딩의 상태를 의미하는 데이터

  // App 컴포넌트가 준비되었을 때 (Mount, 최초 렌더링)
  // useEffect(콜백, 의존성배열)
  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos() {
    try {
      await new Promise(resolve => setTimeout(resolve, 3000))
      const res = await fetch(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          headers: {
            'content-type': 'application/json',
            apikey: '5X8Z1k7M2vU5Q',
            todoname: 'Grepp_KDT4_ParkYoungWoong'
          }
        }
      )
      const data = await res.json()
      console.log('응답 결과:', data)
      setTodos(data)
    } catch (error) {
      if (error instanceof Error) {
        // console.error('에러임', error.message)
        const message = '서버가 폭발했어요!'
        console.error('에러임', message)
        setMessage(message)
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div>{loading && <TheLoader />}</div>
      <div>{message}</div>
      <ul>
        {todos.map(todo => (
          <Fragment key={todo.id}>
            <TodoItem abc={todo} />
          </Fragment>
        ))}
      </ul>
    </>
  )
}

// const 요소 = document.querySelector('button')
// 요소?.addEventListener('click', () => {
//   count += 1
// })

// 모던 프레임워크 (React, Vue, Angular) 정체성! 너는 데이터만 바꿔봐 내가 화면을 바꿀겡
// 반응성(reactivity)
// 반응형 데이터

// 앵귤러가 더 먼저 나왔는데 리액트는 페북꺼 사용성이 좋아서 인기를 끌게됨

//데이터를 바꾼다고 화면이 바뀌는게 아니다! 리액트가 해주는것! useState라는 훅(Hook)
