import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "United Token Swap",
    chainId: "galileo-4",
   createdDate: "2025-07-30T17:16:05.773Z",
  modifiedDate: "2025-07-30T17:16:05.773Z",
    id: "andromeda",
    collections: [
        {
           exchange: "andr1p0juwq2tyeugw67undpkdcyuwagux96vjy7psxj5zaxx2pdqzhrsezukak",
      cw20: "andr1xy3k2fccdycryqpxycwh0760z069hhe9jdjh2vmskm94dvppr25qthawjg",
      name: "United Token Swap",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
