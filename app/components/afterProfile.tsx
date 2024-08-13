import image from "../assets/avatar.webp?url";
import { SITE } from "../config/site_config";
import { Avatar } from "./avatar";

import { SocialList } from "./socialList";

export const AfterProfile = () => {
  return (
    <div className="border border-gray-300 rounded-3xl flex p-6 my-10 gap-6 itemks-center">
      {import.meta.env.PROD ? (
        <Avatar
          src="https://avatars.githubusercontent.com/u/111569596?v=4"
          className="rounded-full w-20 h-20"
        />
      ) : (
        <Avatar src={image} className="rounded-full w-20 h-20" />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <span className="font-bold">{SITE.author}</span>
          <span className="text-gray-500">@atolycs</span>
        </div>
        <p className="text-sm">{SITE.user_description}</p>
        <SocialList />
      </div>
    </div>
  );
};
