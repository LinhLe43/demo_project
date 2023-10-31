import { useRoutes } from 'react-router-dom';

import path from './path';
import Header from '../components/Header';
import Content from '../components/Content';
import { StudentList } from '../components/StudentList';

export default function Router() {
  // const location = useLocation();

  return useRoutes([
    // {
    //   path: path.root,
    //   element: <Navigate to={path.login} state={{ from: location }} />,
    // },
    {
      path: path.root,
      element: (
        <>
          <Header />
          <Content />
          <StudentList />
        </>
      ),
    },
  ]);
}
