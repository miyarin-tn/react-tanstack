import { Outlet } from 'react-router';
import { useLoadingStore } from '@/stores/loading.store';

function App() {
  const { isLoading } = useLoadingStore();

  return (
    <>
      {isLoading && <div className="progress-bar"></div>}
      <Outlet />
    </>
  );
}

export default App;
