import { Fragment, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Detail.css";

import AuthContext from "../../../store/auth-context";

import useHttp from "../../../hooks/use-http";
import { deleteBook } from "../../../lib/api";

const Detail = (props) => {
  const { sendRequest, status } = useHttp(deleteBook);
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const isAdminProfile = ctx.currentUser === "admin";

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status, history]);

  const editBookHandler = () => {
    history.push(`/editBook/${props.book.bookId}`);
  };
  const deleteBookHandler = () => {
    window.confirm("Are you sure you wish to delete this book?") &&
      sendRequest(props.book.bookId);
  };
  return (
    <Fragment>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <div className="relative ">
            <img
              alt="..."
              src={props.book.link}
              className="shadow-xl h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px "
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
          {isAdminProfile && (
            <div className="py-6 px-3 mt-32 sm:mt-0">
              <button
                className="bg-yellow-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={editBookHandler}
              >
                EDIT
              </button>
              <button
                className="bg-red-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={deleteBookHandler}
              >
                DELETE
              </button>
            </div>
          )}
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-1">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {props.book.score}
              </span>
              <span className="text-sm text-blueGray-400">Book Score</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center" style={{ marginTop: "6rem" }}>
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          {props.book.title}
        </h3>
        <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-500 font-bold">
          {props.book.author}
        </div>
        <div className="text-base leading-normal mt-0 mb-2 text-blueGray-500">
          {props.book.genres}
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="mt-10 py-10 border-t border-blueGray-200">
            <p
              className="mb-4 text-lg leading-relaxed text-blueGray-700 break-words"
              style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
            >
              {props.book.description}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Detail;
