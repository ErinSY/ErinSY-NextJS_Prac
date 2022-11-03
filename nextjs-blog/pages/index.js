import Link from 'next/link';

export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <main>
        <h1>{time}</h1>
        <h1>
          <Link href='/csr'>CSR로 이동</Link>
        </h1>
        <h1>
          <Link href='/ssg'>SSG로 이동</Link>
        </h1>
        <h1>
          <Link href='/isr'>ISR로 이동</Link>
        </h1>
      </main>
    </>
  );
}
