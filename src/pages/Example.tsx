import '@/assets/scss/pages/example.scss';
import { useTodoList } from '@/hooks/example.hook';
import { useLoadingStore } from '@/stores/loading.store';
import { useEffect } from 'react';
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
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading, setLoading]);

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
    </div>
  );
}

export function ExampleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Todo detail {id}</h2>
      <button onClick={onGoBack}>Go back</button>
    </div>
  );
}
