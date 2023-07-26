import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Dropdown from '@/components/ui/dropdow'
import { LoginPage } from '@/pages/loginPage/login'
import { Spinner } from '@/components/ui'
import { Mold } from '@/components/ui/mold'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/dropdown',
    element: <Dropdown />
  },
  {
    path: '/mold',
    element: <Mold />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
