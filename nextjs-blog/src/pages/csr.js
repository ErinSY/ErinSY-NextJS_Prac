import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export default function CSR() {
  const [time, setTime] = useState();
  useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <main>
        <h1>{time}</h1>
      </main>
    </>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
