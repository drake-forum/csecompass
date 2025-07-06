import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "🛑 404 Error: Attempted access to unknown route ->",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono p-4">
      <div className="text-center">
        <pre className="text-lg leading-snug mb-6">
{String.raw`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   ERROR 404: PAGE NOT FOUND  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
(╯°□°)╯︵ ┻━┻ 
`}
        </pre>
        <p className="mb-2 text-sm">
          Oops! Looks like you’ve ventured into the <span className="text-pink-400">void</span>.
        </p>
        <p className="mb-4 text-sm">
          The page <span className="text-yellow-300">{location.pathname}</span> does not exist in this universe.
        </p>
        <a
          href="/"
          className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-300 transition"
        >
          ⬅️ Return to Home Base
        </a>
        <p className="mt-6 text-xs text-gray-400">
          If you think this is a bug, please contact your friendly neighborhood dev 🐞
        </p>
      </div>
    </div>
  );
};

export default NotFound;
