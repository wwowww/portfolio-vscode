import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import BlogList from "@/components/molecules/BlogList/BlogList";


const Blog = () => {
  return (
    <>
     <SectionTitle
        title="Recent Posts"
        imageSrc="/src/static/icons/PencilIcon.svg"
        className="blog"
      /> 
      <BlogList />
    </>
  )
}

export default Blog;