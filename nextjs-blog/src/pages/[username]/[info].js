import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function UserNameInfo() {
  const [name, setName] = useState('?');
  const router = useRouter();
  const { username, info, uid } = router.query;
  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => setName(data.name));
  // }, []);

  useEffect(() => {
    uid &&
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => setName(data.name));
  }, [uid]);
  return (
    <>
      <main>
        <h1 className='UserNameInfo'>
          {username} {info}
        </h1>
        <h1 className='Myname'>Name:{name}</h1>
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
