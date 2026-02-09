import Image from "next/image";
//data
import carsData from "@/data/cars.json";

//components
import Header from "@/components/header/header";
import ResultBar from "@/components/resulBar/resultBar";
import OnlyCar from "@/components/onlyCar/onlyCar";
import CardResult from "@/components/cardResult/cardResult";


export default function Home() {
  return (
    <div className="page-index">
      <Header></Header>
      <ResultBar></ResultBar>
      <div className="grid-result">
        <div className="visible-xxl col-left">
          <OnlyCar></OnlyCar>
        </div>
        <div className="col-rigth">
          {carsData.map((car, index) => (
            <CardResult 
              key={index} 
              {...car} // El operador spread envía todas las claves como props
            />
          ))}
        </div>
      </div>
    </div>
  );
}
