const Alert = ({ type, text }) => {
    return (
      <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div
          className={`p-2 ${
            type === "danger" ? "bg-red-700" : "bg-green-500"
          } items-center text-black-500 leading-none lg:rounded-full flex lg:inline-flex`}
          role='alert'
        >
          <p
            className={`flex rounded-full ${
              type === "danger" ? "bg-red-500" : "bg-green-700"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className='mr-2 text-left'>{text}</p>
        </div>
      </div>
    );
  };
  
  export default Alert;