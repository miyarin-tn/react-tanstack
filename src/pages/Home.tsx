import '@/assets/scss/pages/home.scss';
import reactLogo from '/assets/images/react.svg';
import tanstackLogo from '/assets/images/tanstack.svg';
import viteLogo from '/assets/images/vite.svg';

export function Component() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tanstack.com" target="_blank">
          <img src={tanstackLogo} className="logo tanstack" alt="Tanstack logo" />
        </a>
      </div>
      <h1>Vite + React + Tanstack</h1>
      <p className="read-the-docs">
        Click on the Vite, React and Tanstack logos to learn more
      </p>
    </>
  );
}

Component.displayName = 'Home';
