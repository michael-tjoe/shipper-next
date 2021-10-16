import React from "react";
import Image from "next/image";
import { styCardWrapper } from "./styles";

export const DriverCard = () => {
  return (
    <>
      <div className={styCardWrapper}>
        <div className="header">
          <p>
            Driver ID &nbsp;&nbsp;<strong>382648Y</strong>
          </p>
        </div>
        <div className="driver-info">
          <div className="photo">
            <Image alt="" layout="fill" src="/placeholder-user.jpeg" />
          </div>

          <dl className="driver-data">
            <dt>Nama Driver</dt>
            <dd>Black hot drink</dd>

            <dt>Telepon</dt>
            <dd>White cold drink</dd>

            <dt data-hidden="true">Email</dt>
            <dd>White cold drink</dd>

            <dt data-hidden="true">Tanggal Lahir</dt>
            <dd>White cold drink</dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default DriverCard;
