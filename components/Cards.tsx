// import { useState, useEffect } from 'react';
// import BlogCard from './BlogCard';

// const Cards = (props) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const { posts } = props;

//   useEffect(() => {
//     if (posts) setIsLoading(false);
//   }, [posts]);

//   return isLoading ? (
//     <div className="mt-12 text-center">
//       <h3>Loading...</h3>
//     </div>
//   ) : (
//     <div className="grid gap-2 mt-12 sm:grid-cols-2 lg:grid-cols-3">
//       {posts.map(( post, index) => (
//         <BlogCard key={index} post={post} />
//       ))}
//     </div>
//   );
// };

// export default Cards;