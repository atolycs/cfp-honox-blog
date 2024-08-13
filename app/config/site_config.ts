import { SITEDefine, SocialsDefine } from "../types";

export const SITE: SITEDefine = {
  title: "Tech Memo",
  description: "しがないエンジニアのテックメモなどのチラ裏",
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
