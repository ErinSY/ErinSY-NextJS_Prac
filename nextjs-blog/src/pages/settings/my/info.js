import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MyInfo() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'initial' } = router.query;
  return (
    <>
      <main>
        <h1 className='MyInfo'>MyInfo</h1>
        <h1 className='MyInfo'>clicked:{String(clicked)} </h1>
        <h1 className='MyInfo'>status:{status}</h1>
        <button
          onClick={() => {
            setClicked(true);
            location.replace('/settings/my/info?status=forreplace');
          }}
        >
          replace
        </button>
        <br />
        <button
          onClick={() => {
            setClicked(true);
            router.push('/settings/my/info?status=pushshallow', undefined, {
              shallow: true,
            });
          }}
        >
          replace
        </button>
        <br />
        <button
          onClick={() => {
            setClicked(true);
            router.push('/settings/my/info?status=push');
          }}
        >
          replace
        </button>
      </main>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
