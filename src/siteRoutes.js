
import { BrowserRouter , Routes , Route} from 'react-route-dom'

import { Home } from './pages/home'
import { CorPrimaria } from './pages/corprimaria'
import { Frequencia } from './pages/frequencia'
import { Ingresso } from './pages/ingresso'
import { MaiorNumero } from './pages/maiornumero'

export default function SiteRoutes(){
    return(
        <BrowserRouter>
        
            <Routes>

                <Route path= '/' element={<Home />} />
                <Route path= '/' element={<CorPrimaria />} />
                <Route path= '/' element={<Frequencia />} />
                <Route path= '/' element={<Ingresso />} />
                <Route path= '/' element={<MaiorNumero />} />

            </Routes>
        
        </BrowserRouter>
    )
}