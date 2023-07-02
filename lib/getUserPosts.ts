export default async function getUserPosts(id: string) {
  return (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json();
}
