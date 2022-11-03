import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';

export default function Cart() {
  return (
    <>
      <main>
        <h1 className='Cart'>Cart</h1>
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
