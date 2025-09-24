import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './components/auth/Login.tsx'
import MainMenu from './components/mainmenu/MainMenu.tsx'
import BalanceInquiry from './components/pages/balanceinquiry/BalanceInquiry.tsx'
import CashWithDrawl from './components/pages/cashwithdrawl/CashWithDrawl.tsx'
import PinChange from './components/pages/pinchange/PinChange.tsx'
import MiniStatement from './components/pages/ministatement/MiniStatement.tsx'
import PrivateRoutes from './components/privateroutes/PrivateRoutes.tsx'
import { useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />

        <Route
          path="/main-menu"
          element={<PrivateRoutes isAuthenticated={isAuthenticated}>
            <MainMenu />
          </PrivateRoutes>
          }
        />

        <Route
          path="/balance-inquiry"
          element={<PrivateRoutes isAuthenticated={isAuthenticated}>
            <BalanceInquiry />
          </PrivateRoutes>
          }
        />

        <Route
          path="/cash-with-drawl"
          element={<PrivateRoutes isAuthenticated={isAuthenticated}>
            <CashWithDrawl />
          </PrivateRoutes>
          }
        />

        <Route
          path="/pin-change"
          element={<PrivateRoutes isAuthenticated={isAuthenticated}>
            <PinChange />
          </PrivateRoutes>
          }
        />

        <Route
          path="/statement"
          element={<PrivateRoutes isAuthenticated={isAuthenticated}>
            <MiniStatement />
          </PrivateRoutes>
          }
        />
      </Routes>



    </BrowserRouter>
  )
}

export default App
