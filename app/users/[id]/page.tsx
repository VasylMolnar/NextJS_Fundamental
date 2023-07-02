'use client';
import getUserById from '@/lib/getUserById';
import Link from 'next/link';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import { User } from '@/types/user';
import getUserPosts from '@/lib/getUserPosts';
import { useRouter } from 'next/navigation';

type Params = {
  params: {
    id: string;
  };
};

const CurrentUser = async ({ params: { id } }: Params) => {
  const router = useRouter();

  //   console.log(props);in VSCODE
  const userData: Promise<User> = await getUserById(id);
  const currentUser = await userData;

  const userPostsData: Promise<Post[]> = getUserPosts(id);

  // If not progressively rendering with Suspense, use Promise.all
  //const [user, userPosts] = await Promise.all([userData, userPostsData])

  return (
    <section style={{ padding: '50px' }}>
      <h1 style={{ marginBottom: '50px', color: 'red' }}>
        <Link href="#" onClick={() => router.back()}>
          Go back
        </Link>
      </h1>

      <h1 style={{ color: 'orange' }}>{currentUser.name}</h1>

      <br />

      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </section>
  );
};

export default CurrentUser;