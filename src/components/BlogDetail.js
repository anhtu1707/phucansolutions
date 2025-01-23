import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) return <div>Không tìm thấy bài viết</div>;

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            src={post.image}
            alt={post.title}
          />
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-500 mb-8">{post.date}</div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetail; 