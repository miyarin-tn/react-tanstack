import { Outlet } from 'react-router';
import { useLoadingStore } from '@/stores/loading.store';
// import { useIsFetching } from '@tanstack/react-query';

function App() {
  const { isLoading } = useLoadingStore();
  // const isFetching = useIsFetching();

  return (
    <>
      {/* {!!isFetching && <div className="progress-bar"></div>} */}
      {isLoading && <div className="progress-bar"></div>}
      <Outlet />
    </>
  );
}

export default App;
