export type Emoji = {
  // image
  i: string;
  // unified
  u: string;
  // has apple, google, facebook, twitter
  h: [boolean, boolean, boolean, boolean];
  // skins
  s?: string[];
  // added
  a: string;
};

export type EmojiOriginal = {
  name: string;
  unified: string;
  non_qualified: string;
  docomo: string;
  au: string;
  softbank: string;
  google: string;
  image: string;
  sheet_x: number;
  sheet_y: number;
  short_name: string;
  short_names: string[];
  text: string | null;
  texts: string | null;
  category: string;
  subcategory: string;
  sort_order: number;
  added_in: string;
  has_img_apple: boolean;
  has_img_google: boolean;
  has_img_twitter: boolean;
  has_img_facebook: boolean;
  skin_variations: {
    [key: string]: EmojiOriginal;
  };
  obsoletes: string;
  obsoleted_by: string;
};
