import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export default function UserNameInfo() {
  const router = useRouter();
  const { username, info } = router.query;
  return (
    <>
      <main>
        <h1 className='UserNameInfo'>
          {username} {info}
        </h1>
      </main>
    </>
  );
}

UserNameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
