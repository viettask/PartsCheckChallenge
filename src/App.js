import './App.css';
import { useQuery } from 'react-query';
import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import dataSupplier from "./data";


export default function App() {
  const [dataSup, setDataSup] = React.useState(dataSupplier);

  const fetchData = async () =>
    await (await fetch("http://portalapi.partscheck.com.au/api.php?class=Access&method=fetchExtensionQuoteDetails&hash=DDD123456xx")).json();

  const { data, error, status } = useQuery("users", fetchData);

  return (
    <div>
      {status === "error" && <div>this has an error</div>}

      {status === "loading" && <div>{dataSup["packet"].map(
        (item) =>
        (
          <div>{item}</div>
        )
      )}</div>}

      {status === "success" && <div>{data} </div>}
    </div>
  );
}

//      {status === "error" && <div>{error.message}</div>}
//        {status === "loading" && <div>Loading...</div>}
//       {status === "success" && <div>{data} </div>}

{
  // status === "loading" && <div>{dataSup.packet.vehicleMakes.map(
  //   (item) =>
  //   (
  //     <div key={item.id}>HI</div>
  //   )
  // )}</div>
}