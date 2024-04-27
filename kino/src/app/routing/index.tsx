import { Route, Routes} from 'react-router-dom';
import Home from '../../page/Kino';
import ScrollToTop from '../../components/ScrollToTop';
import MovieId from '../../page/MovieId';
const MainRouter = () => {
    return ( 
        <>
            <ScrollToTop/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/movie/:id' element={<MovieId/>}/>
                </Routes>
        </>
     );
}
 
export default MainRouter;