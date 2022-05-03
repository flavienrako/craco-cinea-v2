import { useSetRecoilState } from 'recoil';
import { pageState } from 'store';

const useMovies = () => {
  const setPage = useSetRecoilState(pageState);

  const fetchMore = () => {
    setPage((p) => p + 1);
  };
  return { fetchMore };
};

export default useMovies;
