import Link from 'next/link';

export default function SubLayout({ children }) {
  return (
    <>
      <h1>
        <Link href='/'>메인으로 이동</Link>
      </h1>
      {children}
    </>
  );
}
