export type SITEDefine = {
  title: string;
  description: string;
  author: string;
  [key: string]: string;
};

export type SocialsDefine = {
  name: string;
  href: string;
  active: boolean;
  linkdescription: string;
}[];
