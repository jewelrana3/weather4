import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WeatherLoading from "./Spinner";
import ToastBox from "./ToastBox";


const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
    return (
       <div>
        {
            !isLoading ? (
                <div>
                    <Outlet></Outlet>
                    <ToastBox></ToastBox>
                </div>
            ) : (<WeatherLoading />)
        }
       </div>
    );
};

export default Main;