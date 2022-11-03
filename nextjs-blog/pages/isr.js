import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export async function getStaticProps() {
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

export default function ISR({ time }) {
  return (
    <>
      <main>
        <h1>{time}</h1>
      </main>
    </>
  );
}

ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
