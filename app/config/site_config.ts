import { SITEDefine, SocialsDefine } from "../types/site_types";

export const SITE: SITEDefine = {
  title: "Tech Memo",
  description: "しがないエンジニアのテックメモなどのチラ裏",
  user_description: "どこかでエンジニアやってます",
  author: "Atolycs",
};

export const LOCALE = {
  lang: "ja",
} as const;

export const SOCIALS: SocialsDefine = [
  {
    name: "Github",
    href: "https://github.com/atolycs",
    active: true,
    linkdescription: "Atolycs on Github",
  },
];
