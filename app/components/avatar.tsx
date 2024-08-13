import type { AvatarProps } from "../types/avatar";

export const Avatar = (props: AvatarProps) => {
  const classprops = props.className ? props.className : "rounded-full w-full";
  return <img src={props.src} className={classprops} />;
};
