// 모든페이지에 공통으로 적용됨

import Layout from '../components/Layout';

const App = ({ Component, pageProps }) => {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>); // 페이지에 getLayout이 있다면 그 함수를 실행하고 아니라면 그냥 Layout만 감싸서 실행

  return getLayout(<Component {...pageProps} />);  // Component 가 page로써 들어감. 
};

export default App;
