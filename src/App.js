import {Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store'
import Home from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import PostDetail from './pages/PostDetail'
import Homes from './pages/Estate/Home'
import CottageHouse from "./pages/Estate/CottageHouse";
import Area from "./pages/Estate/Area";
import WorkPlace from "./pages/Estate/WorkPlace";
import Layout from './components/Layout';
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgetPassword from "./pages/Auth/ForgetPassword";



function App() {

  return (

    <Provider store={Store}>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='change_password' element={<ForgetPassword />} />
                <Route path='homes' element={<Homes />} />
                <Route path='houses' element={<CottageHouse />} />
                <Route path='areas' element={<Area />} />
                <Route path='work-place' element={<WorkPlace />} />
                <Route path='post/:id' element={<PostDetail />} />

                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
      </Provider>
  )
}

export default App;
