interface IError {
  message: string;
}

const Error = ({ message }: IError) => {
  return <div className="flex justify-center items-center font-semibold text-lg text-red-500">{message}</div>;
};

export default Error;
