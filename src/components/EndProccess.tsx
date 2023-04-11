import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  message: string;
  action?: boolean;
  actionMessage?: string;
  editState?: React.Dispatch<React.SetStateAction<boolean>>;
  isNotGood?: boolean;
}

function EndProccess(props: Props) {
  let title = props.title;
  let message = props.message;
  let action = props.action;
  let actionMessage = props.actionMessage;
  let isNotGood = props.isNotGood;
  let editState = props.editState;

  return (
    <div className="w-full py-8 max-w-5xl flex flex-col justify-center items-center">
      {
        isNotGood 
          ? <div className="w-24 h-24 my-6 rounded-full bg-red-100 flex justify-center items-center">
              <ExclamationCircleIcon className="w-16 h-16 text-red-600" />
            </div>
          : <div className="w-24 h-24 my-6 rounded-full bg-green-100 flex justify-center items-center">
              <CheckCircleIcon className="w-16 h-16 text-green-600" />
            </div>
      }

      <div className="mt-3 mb-8 text-center">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          { title }
        </h3>
        <div className="mt-2">
          <p className="text-sm max-w-lg text-gray-500">
            { message }
          </p>
        </div>
      </div>

      {
        action
          ? <div className="my-6 flex justify-around items-center">
              <Link to="/tables-ts/dashboard" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center">
                  Back to dashboard
              </Link>

              <button type="button" onClick={() => { if(editState) editState(false)}} className="text-gray-600 bg-white hover:bg-gray-50 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center ml-4">
                { actionMessage }
              </button>
            </div>
          : 
            <div className="my-6 flex justify-center items-center">
            <Link to="/tables-ts/dashboard"
              type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center">
                Back to dashboard
            </Link>
          </div>
      }
    </div>
  )
}

export default EndProccess