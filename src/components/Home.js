import React from 'react';
import FilterableMovieTable from './FilterableMovieTable';
import Footer from './Footer';






function Home() {
  return (
    <>
    

    <div className="container">
      <FilterableMovieTable />
      <hr />
      <Footer />
    </div>
  </>
  );
}

export default Home;
