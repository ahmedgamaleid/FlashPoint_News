import React, { useContext, useState } from 'react';
import { TrendingAndCategContext } from '../CONTEXT/trendingandcateg';
import { motion } from 'framer-motion';
import tophead from '../img/Frame 93.png';

const NEWS = () => {
  const { news } = useContext(TrendingAndCategContext);

  // Filter articles that have an image
  const articlesWithImages = news.filter((article) => article.urlToImage);

  // Pagination setup
  const articlesPerPage = 16; // Number of articles per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articlesWithImages.length / articlesPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) =>
      direction === 'next' ? Math.min(prevPage + 1, totalPages) : Math.max(prevPage - 1, 1)
    );
  };

  // Get current articles for pagination
  const startIdx = (currentPage - 1) * articlesPerPage;
  const currentArticles = articlesWithImages.slice(startIdx, startIdx + articlesPerPage);

  // Utility to truncate long text
  const truncateText = (text, limit) =>
    text.length > limit ? `${text.substring(0, limit)}...` : text;

  // Animation variants for articles
  const customNEWSContentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.05, duration: 0.2 },
    }),
  };

  return (
    <div className="newsss py-2 text-center">
      {/* Top header */}
      {/* <div className="container my-3">
        <div className="position-relative text-start">
          <img src={tophead} className="w-100" alt="Top Headlines Banner" />
          <div className="position-absolute top-header-overlay">
            <h1 className="text-white">Catch Up on the Latest Breaking News</h1>
          </div>
        </div>
      </div> */}

      {/* News Articles */}
      <div className="container py-5">
        {currentArticles.length > 0 ? (
          <div className="row">
            {currentArticles.map((article, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12 mb-4"
                custom={index}
                variants={customNEWSContentVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="news-item rounded overflow-hidden">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={article.urlToImage}
                      alt={article.title || 'News Thumbnail'}
                      className="news-image img-fluid w-100"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                  </a>
                  <div className="p-3">
                    <h3 className="h5 text-dark text-start">
                      {truncateText(article.title || 'Untitled Article', 60)}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">No valid news available</p>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button
              className="btn btn-primary px-5 py-2 rounded-pill fs-5 mx-3"
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-primary px-5 py-2 rounded-pill fs-5 mx-3"
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NEWS;
