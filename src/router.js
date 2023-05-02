import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TermsAndPrivacyPolicy from './pages/Terms_and_Privacy'
import Coupons from './pages/coupons'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/nft',
    element: 'nft',
  },
  {
    path: '/terms-and-privacy',
    element: <TermsAndPrivacyPolicy />,
  },
  {
    path:'/coupons',
    element:<Coupons/>
  }
])

export default router
