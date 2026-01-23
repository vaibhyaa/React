import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { Link } from "react-router-dom";

/* eslint-disable react/react-in-jsx-scope */
function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl leading-snug">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Link to="/menu">
          <Button type="primary">Continue ordering, {username}</Button>
        </Link>
      )}
    </div>
  );
}

export default Home;
