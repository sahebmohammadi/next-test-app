import SEO from "../common/SEO";

const Blogs = (props) => {
  return (
    <div>
      <SEO meta={props} />
      <h1>this is blog page</h1>
    </div>
  );
};

export default Blogs;

export const getServerSideProps = () => {
  return {
    props: {
      title: "blog -1",
      desc: "this is desc",
    },
  };
};
