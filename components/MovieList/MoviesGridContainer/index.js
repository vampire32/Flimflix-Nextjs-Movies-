

const MoviesGridContainer = ({
  theme,
  children
}) => (
  <>
    <div className='grid-container'>{children}</div>
    <style jsx>{`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 5rem 0;
  }

  .grid-item {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .grid-item:hover {
    transform: translateY(-5px);
    background-color: #ffffcc; /* Change to yellow on hover */
    box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.2); /* Add a larger shadow on hover */
  }

  .grid-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1); /* Dim overlay */
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  .grid-item:hover::before {
    opacity: 1;
  }
`}</style>

  </>
);

export default MoviesGridContainer;
