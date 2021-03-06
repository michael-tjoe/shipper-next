export type DriverName = {
  title: string;
  first: string;
  last: string;
};

export type DriveDob = {
  date: string;
  age: number;
};

export type DriveId = {
  name: string;
  value: string;
};

export type DriverPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export interface DriverInfo {
  name: DriverName;
  email: string;
  dob: DriveDob;
  phone: string;
  id: DriveId;
  picture: DriverPicture;
}
