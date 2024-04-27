import { Route, Routes} from 'react-router-dom';
import Home from '../../page/Kino';
import ScrollToTop from '../../components/ScrollToTop';
const MainRouter = () => {
    return ( 
        <>
            <ScrollToTop/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
        </>
     );
}
 
export default MainRouter;