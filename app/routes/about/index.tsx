import image from "../../assets/avatar.webp?url";
import { createRoute } from "honox/factory";
import { Avatar } from "../../components/avatar";

import { Link } from "../../components/Link";
import { SITE, SOCIALS } from "../../config/site_config";

export default createRoute((c) => {
  c.status(500);
  return c.render(
    <>
      <h1 className="text-lg">About Me</h1>
      <div className="flex gap-6">
        {import.meta.env.PROD ? (
          <Avatar
            src="https://avatars.githubusercontent.com/u/111569596?v=4"
            className="rounded-full w-48 h-48"
          />
        ) : (
          <Avatar src={image} className="rounded-full w-48 h-48" />
        )}
        <div className="flex flex-col gap-3">
          <p>Name: {SITE.author}</p>
          <p>{SITE.user_description}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Socials:</p>
          {SOCIALS.map((social) => (
            <Link href={social.href} className="hover:underline">
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </>,
  );
});
