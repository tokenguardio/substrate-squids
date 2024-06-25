import fs from "fs";
import { Abi as InkAbi } from "@subsquid/ink-abi";

const abiv5CardinalContent = fs.readFileSync(
  "./assets/psp22v5Cardinal.json",
  "utf-8"
);
const abiv4CardinalContent = fs.readFileSync(
  "./assets/psp22v4Cardinal.json",
  "utf-8"
);
const abiv4InkWhaleContent = fs.readFileSync(
  "./assets/psp22v4InkWhale.json",
  "utf-8"
);

const abiv5CardinalJson = JSON.parse(abiv5CardinalContent);
const abiv4CardinalJson = JSON.parse(abiv4CardinalContent);
const abiv4InkWhaleJson = JSON.parse(abiv4InkWhaleContent);

const psp22v5CardinalAbi = new InkAbi(abiv5CardinalJson);
const psp22v4CardinalAbi = new InkAbi(abiv4CardinalJson);
const psp22v4InkWhaleAbi = new InkAbi(abiv4InkWhaleJson);

export { psp22v5CardinalAbi, psp22v4CardinalAbi, psp22v4InkWhaleAbi };
