import Link from 'next/link';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const Logo = () => (
  <>
    <Link
      href={{
        pathname: LINKS.HOME.HREF,
        query: {
          [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a className="logo-link">
        <img src="https://i.ibb.co/XWpVMQr/Blue-and-Pink-Aesthetic-Film-Company-Logo-removebg-preview.png" alt="Film Company Logo" className="logo-img" />
      </a>
    </Link>
    <style jsx>{`
      .logo-link {
        position: absolote;
        top: 0;
        left: 2rem;
        margin: -3rem;
      }

      .logo-img {
        width: 250px;
        height: 250px;
      }
    `}</style>
  </>
);

export default Logo;
