import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ErrorPage from '@/pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/Home'),
      },
      {
        path: 'examples',
        async lazy() {
          const { ExampleLayout } = await import('@/pages/Example');
          return { Component: ExampleLayout };
        },
        children: [
          {
            index: true,
            async lazy() {
              const { ExampleIndex } = await import('@/pages/Example');
              return { Component: ExampleIndex };
            },
          },
        ],
      },
      {
        path: 'example',
        async lazy() {
          const { ExampleLayout } = await import('@/pages/Example');
          return { Component: ExampleLayout };
        },
        children: [
          {
            index: true,
            element: <Navigate to="/examples" replace />,
          },
          {
            path: ':id',
            async lazy() {
              const { ExampleDetail } = await import('@/pages/Example');
              return {
                Component: ExampleDetail,
              };
            },
          },
        ],
      },
    ],
  },
]);
