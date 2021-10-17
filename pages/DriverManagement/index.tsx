import React from "react";
import Button from "@shared/components/Button";
import DriverCard from "@components/DriverManagement/DriverCard";
import {
  styDriverHeader,
  stySearchWrapper,
  styDriverCardList,
} from "@styles/driver.style";

export const DriverManagement = ({ data }) => {
  console.log("driverList: ", data);
  return (
    <>
      <div className={styDriverHeader}>
        <div className="title">
          <h1>Driver Management</h1>
          <p>Data driver yang bekerja dengan Anda.</p>
        </div>

        <div className="btn-group">
          <div className={stySearchWrapper}>
            <button />
            <input
              type="text"
              aria-label="cari driver"
              placeholder="Cari driver"
            />
          </div>
          <Button block>Tambah Driver</Button>
        </div>
      </div>

      <div className={styDriverCardList}>
        <DriverCard />
        <DriverCard />
        <DriverCard />
        <DriverCard />
      </div>

      <div>
        <button>Previous Page</button>
        <button>Next Page</button>
      </div>
    </>
  );
};




export async function getServerSideProps() {
  const res = await fetch(`https://randomuser.me/api/?results=30`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default DriverManagement;
