import { Link } from "./Link";

export type Props = {
  title: string;
  entryName: string;
  date?: string;
  draft?: boolean;
};

export const PostList = (props: Props) => {
  return (
    <>
      <div className="flex gap-6 items-center">
        <div className="flex items-center rounded-xl p-4 shrink-0 max-h-20">
          <Link
            href={`/posts/${props.entryName}`}
            className="flex flex-col gap-2 hover:underline"
          >
            {props.title}
          </Link>
          {
            // @ts-ignore
            props.draft ? (
              <span className="text-xs text-gray-500">Draft</span>
            ): null
          }
          <time className="text-gray-500 text-sm max-md:text-xs mx-4">
            {
              // @ts-ignore
              new Date(props.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }
          </time>
        </div>
      </div>
    </>
  );
};
