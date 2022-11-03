import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export default function Cart() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main>
        <h1 className='Cart'>Cart{JSON.stringify(slug)}</h1>
      </main>
    </>
  );
}

Cart.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
