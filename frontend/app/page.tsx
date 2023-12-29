'use client'
import { useEffect, useState } from 'react';
import { useDebounce } from 'react-use';
import { useQuery } from '@apollo/client';
import { GET_PODCASTS } from './graphql/podcast';
import { Podcast } from '@/app/types/podcast.type';

import PodcastList from './components/PodcastList';
import SearchBar from './components/SearchBar';
import PageSizeDropdown from './components/PageSizeDropdown';
import Pagination from './components/Pagination';

const Home = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [podcasts, setPodcasts] = useState<Array<Podcast>>();

  const { loading, refetch } = useQuery(GET_PODCASTS, {
    notifyOnNetworkStatusChange: true,
    variables: { query: `search=${search}&page=${page}&limit=${pageSize}` },
    onCompleted(res) {
      setNextBtnDisabled(res.getPodcasts.length === 0 || res.getPodcasts.length < pageSize);
      setPodcasts(res.getPodcasts.length === 0 ? [] : res.getPodcasts);
    },
    onError(err) {
      throw err;
    }
  });

  useDebounce(() => {
    if (search !== input) {
      setSearch(input);
      setPageSize(10);
      setPage(1);

      refetch({
        query: `search=${input}&page=${page}&limit=${pageSize}`,
      });
    }
  }, 500, [input, search]);

  useEffect(() => {
    setPrevBtnDisabled(page === 1);

    refetch({
      query: `search=${input}&page=${page}&limit=${pageSize}`,
    });
  }, [page]);

  useEffect(() => {
    setPrevBtnDisabled(true);
    setPage(1);

    refetch({
      query: `search=${input}&page=1&limit=${pageSize}`,
    });
  }, [pageSize]);

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-row justify-between">
        <SearchBar input={input} setInput={setInput} loading={loading} />
        <div className="flex items-center gap-4">
          <PageSizeDropdown pageSize={pageSize} setPageSize={setPageSize} />
          <span className="text-md font-normal text-gray-800 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            items per page
          </span>
        </div>
      </div>
      <PodcastList podcasts={podcasts ?? []} />
      <Pagination
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;