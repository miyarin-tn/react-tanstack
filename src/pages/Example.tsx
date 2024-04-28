import '@/assets/scss/pages/example.scss';
import { usePeopleList, useTodoDetail, useTodoList } from '@/hooks/example.hook';
import { useLoadingStore } from '@/stores/loading.store';
import { Fragment, useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

export function ExampleLayout() {
  return (
    <div>
      <h1>Example</h1>
      <hr />
      <Outlet />
    </div>
  );
}

export function ExampleIndex() {
  const { data: todoList, isLoading, isError, error } = useTodoList();
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending: pIsPending,
    isFetching: pIsFetching,
    isError: pIsError,
    data: pData,
    error: pError,
  } = usePeopleList();

  const { setLoading } = useLoadingStore();
  useEffect(() => {
    if (isLoading || pIsFetching) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading, setLoading, pIsFetching]);

  const loadPeople = () => {
    return pIsPending ? (<p>Loading...</p>) : pIsError ? (<p>Error: {pError.message}</p>) : (
      <>
        {pData.pages.map((group, i) => (
          <Fragment key={i}>
            {group.results.map((project, j) => (
              <p key={j}>{project.name}</p>
            ))}
          </Fragment>
        ))}
        <div>
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
          </button>
        </div>
        <div>{pIsFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
      </>
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Todo list</h2>
      <nav className="nav-example">
        <ul>
          {todoList?.map((todo) => (
            <li key={todo.id}>
              <Link to={`/example/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {loadPeople()}
    </div>
  );
}

export function ExampleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: todoDetail, isLoading, isError, error } = useTodoDetail(Number(id), {
    enabled: !!id,
  });
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [id, isLoading, setLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Todo detail {id}</h2>
      <p>{todoDetail?.title}</p>
      <button onClick={onGoBack}>Go back</button>
    </div>
  );
}
