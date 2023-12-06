import ky from "ky";
import * as fs from "fs";
import type { Emoji, EmojiOriginal } from "./types.js";
import { skins } from "./constants.js";

async function createFirst() {
  const json = ky.get(
    "https://cdn.jsdelivr.net/npm/emoji-datasource/emoji.json",
  );
  const data: Array<EmojiOriginal> = await json.json();
  let obj: {
    [key: string]: Emoji;
  } = {};

  for (let i = 0; i < data.length; i++) {
    let buffer: Emoji = {
      i: data[i].image,
      u: data[i].unified,
      h: [
        data[i].has_img_apple,
        data[i].has_img_google,
        data[i].has_img_facebook,
        data[i].has_img_twitter,
      ],
      a: data[i].added_in,
    };

    if (data[i].skin_variations) {
      buffer.s = [];
      for (let key in data[i].skin_variations) {
        let skin = skins[key];
        buffer.s.push(i + "_" + skin);
        obj[i + "_" + skin] = {
          i: data[i].skin_variations[key].image,
          u: data[i].skin_variations[key].unified,
          h: [
            data[i].skin_variations[key].has_img_apple,
            data[i].skin_variations[key].has_img_google,
            data[i].skin_variations[key].has_img_facebook,
            data[i].skin_variations[key].has_img_twitter,
          ],
          a: data[i].skin_variations[key].added_in,
        };
      }
    }
    obj[i] = buffer;
  }
  let file = "export const emojis = " + JSON.stringify(obj) + ";";
  console.log(Object.keys(obj).length);
  fs.writeFileSync("../lib/data/emojis.ts", file);
}

async function createSecond() {
  const json = ky.get(
    "https://cdn.jsdelivr.net/npm/emoji-datasource/emoji.json",
  );
  const data: Array<EmojiOriginal> = await json.json();
  let obj: {
    [key: string]: string[];
  } = {};
  for (let i = 0; i < data.length; i++) {
    if (obj[data[i].category]) {
      obj[data[i].category].push(String(i));
    } else {
      obj[data[i].category] = [String(i)];
    }
  }
  for (let key in obj) {
    obj[key] = obj[key]
      .map(Number)
      .sort((a, b) => a - b)
      .map(String);
  }
  let file = "export const category = " + JSON.stringify(obj) + ";";
  console.log(Object.keys(obj).length);
  fs.writeFileSync("../lib/data/category.ts", file);
}

await createFirst();
await createSecond();
