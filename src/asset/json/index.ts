import { GetRoomResponseApi } from "@/model/response";

export interface provinces {
  provinceCode: number;
  provinceNameEn: string;
  provinceNameTh: string;
}
export interface districts {
  provinceCode: number;
  districtCode: number;
  districtNameEn: string;
  districtNameTh: string;
  postalCode: number;
}
export interface subdistricts {
  provinceCode: number;
  districtCode: number;
  subdistrictCode: number;
  subdistrictNameEn: string;
  subdistrictNameTh: string;
  postalCode: number;
}
export interface DropdownItem {
  id: number;
  valueEn: string;
  valueTh: string;
}
type Thailand = {
  provinces: provinces[];
  districts: districts[];
  subdistricts: subdistricts[];
  provincesConv: DropdownItem[];
  districtsConv: { [key: string]: DropdownItem[] };
  subdistrictsConv: { [key: string]: DropdownItem[] };
};
const Thailand: Thailand = {
  provinces: require("./provinces.json"),
  districts: require("./districts.json"),
  subdistricts: require("./subdistricts.json"),
  provincesConv: require("./provinces_conv.json"),
  districtsConv: require("./district_conv.json"),
  subdistrictsConv: require("./subdistricts_conv.json"),
};
const room: GetRoomResponseApi = require("./room.json");
const topic = require("./topic.json");

export { Thailand, room, topic };
