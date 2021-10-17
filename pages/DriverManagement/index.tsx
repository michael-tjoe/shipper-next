import React, { FC, useMemo, useState, useRef, useEffect } from "react";
import Button from "@shared/components/Button";
import DriverCard from "@components/DriverManagement/DriverCard";
import { DriverInfo } from "../../types/driver";
import {
  styDriverHeader,
  stySearchWrapper,
  styDriverCardWrapper,
  styDriverCardList,
  styButtonNav,
} from "@styles/driver.style";

const DEFAULT_PAGE_SIZE = 5;
const DEFAULT_CURRENT_PAGE = 1;

interface DriverManagementProps {
  data: Array<DriverInfo>;
}

export const DriverManagement: FC<DriverManagementProps> = ({ data }) => {
  const cardContainerEl = useRef<HTMLDivElement>(null);

  const [pageStatus, setPageStatus] = useState({
    currentPage: DEFAULT_CURRENT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const totalPages = Math.ceil(Number(data.length) / DEFAULT_PAGE_SIZE);
  const hasNext = pageStatus.currentPage < totalPages;
  const hasPrev = pageStatus.currentPage > 1;

  const offset = (pageStatus.currentPage - 1) * DEFAULT_PAGE_SIZE;
  const limit = offset + DEFAULT_PAGE_SIZE - 1;

  useEffect(() => {
    const wrapperEl = cardContainerEl.current;

    if (wrapperEl) {
      window.scrollTo(0, 0);
      wrapperEl.scrollTo(0, 0);
    }
  }, [pageStatus]);

  const list = useMemo(() => {
    return data.filter((_: DriverInfo, index: number) => {
      return index >= offset && index <= limit;
    });
  }, [pageStatus]);

  const handleNextPage = () => {
    if (hasNext) {
      const newPage = pageStatus.currentPage + 1;

      setPageStatus({
        ...pageStatus,
        currentPage: newPage,
      });
    }
    return;
  };

  const handlePrevPage = () => {
    if (hasPrev) {
      const newPage = pageStatus.currentPage - 1;

      setPageStatus({
        ...pageStatus,
        currentPage: newPage,
      });
    }
    return;
  };

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

      <div className={styDriverCardWrapper}>
        <div ref={cardContainerEl} className={styDriverCardList}>
          {list.map((driverData: DriverInfo) => {
            return (
              <DriverCard
                key={`${driverData.email} ${driverData.phone}`}
                detail={driverData}
              />
            );
          })}
        </div>
        <div className={styButtonNav}>
          <button disabled={!hasNext} onClick={handleNextPage} className="next">
            Next Page
          </button>
          <button disabled={!hasPrev} onClick={handlePrevPage} className="prev">
            Previous Page
          </button>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://randomuser.me/api/?inc=id,name,phone,email,dob&results=31&seed=abc`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data.results },
  };
}

export default DriverManagement;
