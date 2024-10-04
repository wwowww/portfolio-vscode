import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import BlogList from "@/components/molecules/BlogList/BlogList";
import pencilIcon from "@/static/icons/PencilIcon.svg";


const Blog = () => {
  return (
    <>
     <SectionTitle
        title="Recent Posts"
        imageSrc={pencilIcon}
        className="blog"
      /> 
      <BlogList />
    </>
  )
}

export default Blog;