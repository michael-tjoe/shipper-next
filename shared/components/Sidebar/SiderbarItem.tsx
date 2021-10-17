import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface SidebarItemProps {
  path: string;
  image: string;
  title: string;
  onClick: () => void;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  image,
  path,
  title,
  onClick,
}) => {
  return (
    <Link href={path}>
      <a onClick={onClick}>
        <div className="icon">
          <Image src={image} alt="" layout="fill" />
        </div>
        <p>{title}</p>
      </a>
    </Link>
  );
};

export default SidebarItem;
