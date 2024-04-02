import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import Post from './Pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post'>
        <Route path=':postId' element={<Post />} />
      </Route>
    </Routes>
  );
}
