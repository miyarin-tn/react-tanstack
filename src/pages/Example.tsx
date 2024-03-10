import '@/assets/scss/pages/example.scss';
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
  return (
    <div>
      <h2>Example Index</h2>
      <nav className="nav-example">
        <ul>
          <li>
            <Link to="/example/1">Example 1</Link>
          </li>
          <li>
            <Link to="/example/2">Example 2</Link>
          </li>
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
      <h2>Example Detail {id}</h2>
      <button onClick={onGoBack}>Go back</button>
    </div>
  );
}
