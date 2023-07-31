import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES

import { LoginPage } from '@/pages/loginPage/login'
import { DashboardPage } from '@/pages/dashboardPage'
import { PredictionsPage } from '@/pages/predictionsPage'
import { ProductsPage } from '@/pages/productsPage'
import { ProductPage } from '@/pages/productPage'
import { ClientPage } from '@/pages/clientPage'
import { Mold } from '@/components/ui/mold'
import { PredictionClientPage } from '@/pages/PredictionClientPage'
import { NotAuthorized } from '@/pages/notAuthorized'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/naoautorizado" element={<NotAuthorized />} />
        <Route path="/mold" element={<Mold />}>
          <Route path="/mold/dashboardPage" element={<DashboardPage />} />
          <Route path="/mold/predicoesPage" element={<PredictionsPage />} />
          <Route
            path="/mold/predicaoClientPage"
            element={<PredictionClientPage />}
          />
          <Route path="/mold/productsPage" element={<ProductsPage />} />
          <Route path="/mold/productPage/:id" element={<ProductPage />} />
          <Route path="/mold/clientPage/:id" element={<ClientPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
