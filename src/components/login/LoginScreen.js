import { useNavigate } from "react-router-dom";

const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/",{
      replace:true
    });
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-purple-800 h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center opacity-90 h-96 w-80 rounded-md bg-slate-700 ">
        <div className=" flex justify-center items-center absolute h-20 w-20 rounded-[50%] bg-slate-700 -top-10 left-[120px]">
          <img
            className="object-cover w-full h-full rounded-[50%]"
            src="https://res.cloudinary.com/dmn1muomz/image/upload/v1648504543/dc-blue_xgcsri.jpg"
            alt="black"
          />
        </div>
        <h1 className="text-white text-2xl font-bold mt-16 mb-4">
          Iniciar sesion
        </h1>
        <div>
          <p className="text-white my-2">Email</p>
          <input
            className="outline-none bg-gray-200 w-56 py-1 px-2 rounded-md "
            placeholder="ingrese su email"
            type="email"
            name="email"
          />
        </div>
        <div>
          <p className="text-white my-2">Password</p>
          <input
            className="outline-none bg-gray-200 w-56 py-1 px-2 rounded-md "
            placeholder="ingrese su email"
            type="text"
            name="email"
          />
        </div>
        <div className="mt-2">
          <p className="text-gray-400 text-xs my-2">
            No tienes una cuenta?
            <span className="text-blue-700 hover:cursor-pointer">
              Registrate aqui
            </span>{" "}
          </p>
        </div>
        <div className="absolute bottom-2">
          <button onClick={handleLogin} className="bg-purple-800 cursor-pointer p-4 rounded-md text-white font-bold">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
