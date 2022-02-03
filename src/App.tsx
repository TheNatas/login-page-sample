import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './global';

function App() {
  return (
    <Layout>
      <Outlet/>
      <GlobalStyles/>
    </Layout>
  );
}

export default App;
