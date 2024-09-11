// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul className="blog_list">
      {blogDetails.map(eachBlog => (
        <BlogItem key={eachBlog} blogItemDetails={eachBlog} />
      ))}
    </ul>
  )
}
export default BlogList
