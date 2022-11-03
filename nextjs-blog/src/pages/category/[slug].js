import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export default function CategorySlug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main>
        <h1 className='CategorySlug'>Category {slug}</h1>
      </main>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
