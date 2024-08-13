export type Props = {
  title: string;
  entryName: string;
};

export const PostList = (props: Props) => {
  return <a href={`/posts/${props.entryName}`}>{props.title}</a>;
};
