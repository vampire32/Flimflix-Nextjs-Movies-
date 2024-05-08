
import clsx from 'clsx';

const Loading = () => (
  <>
    <div className='loading' />
    <style jsx>{`

      }
    `}</style>
  </>
);

const Loader = ({
  className = '',
  centerViewport,
  centerRow
}) => (
  <>
    <div
      className={
        clsx(
          'loader',
          {'center-viewport': centerViewport},
          {'center-row': centerRow},
          className
        )
      }>
      <Loading />
    </div>
    <style jsx>{`
      .loader {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px; /* Increased width */
        height: 200px; /* Increased height */
      }

      .loader::before {
        content: '';
        width: 70px; /* Increased size */
        height: 70px; /* Increased size */
        border: 8px solid #ffeb3b; /* Yellow color */
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
</style>


  </>
);

export default Loader;
