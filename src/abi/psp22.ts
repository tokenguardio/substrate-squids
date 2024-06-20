import fs from "fs";
import { Abi as InkAbi } from "@subsquid/ink-abi";

const abiv5Content = fs.readFileSync("./assets/psp22v5.json", "utf-8");
const abiv4Content = fs.readFileSync("./assets/psp22v4.json", "utf-8");

const abiv5Json = JSON.parse(abiv5Content);
const abiv4Json = JSON.parse(abiv4Content);

const psp22v5Abi = new InkAbi(abiv5Json);
const psp22v4Abi = new InkAbi(abiv4Json);

export { psp22v5Abi, psp22v4Abi };
