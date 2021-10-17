import React, { FC } from "react";
import Image from "next/image";
import { styCardWrapper } from "./styles";
import { DriverInfo } from "../../../types/driver";

interface DriverCardProps {
  detail: DriverInfo;
}

export const DriverCard: FC<DriverCardProps> = ({ detail }) => {
  return (
    <>
      <div className={styCardWrapper}>
        <div className="header">
          <p>
            Driver ID &nbsp;&nbsp;<strong>{detail.id.value}</strong>
          </p>
        </div>
        <div className="driver-info">
          <div className="photo">
            <Image alt="" layout="fill" src="/placeholder-user.jpeg" />
          </div>

          <dl className="driver-data">
            <dt>Nama Driver</dt>
            <dd>{`${detail.name.title} ${detail.name.first} ${detail.name.last}`}</dd>

            <dt>Telepon</dt>
            <dd>{detail.phone}</dd>

            <dt data-hidden="true">Email</dt>
            <dd>{detail.email}</dd>

            <dt data-hidden="true">Tanggal Lahir</dt>
            <dd>{detail.dob.date}</dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default DriverCard;
