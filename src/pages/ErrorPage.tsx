import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{error?.data}</p>
      <p>
        <i>{error?.status} {error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
