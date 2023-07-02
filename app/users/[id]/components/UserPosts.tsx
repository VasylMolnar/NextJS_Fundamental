type UserPostsProps = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: UserPostsProps) {
  const posts = await promise;

  return posts.map(({ ...post }: Post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <br />
    </article>
  ));
}
