import { JSX } from "hono/jsx/jsx-runtime";
import { SOCIALS } from "../config/site_config";
import { Link } from "./Link";

export const SocialList = () => {
  return (
    <div className={`gap-2 items-center flex `}>
      {SOCIALS.map((social, _) => (
        <Link href={social.href} className="hover:underline">
          {social.name}
        </Link>
      ))}
    </div>
  );
};
