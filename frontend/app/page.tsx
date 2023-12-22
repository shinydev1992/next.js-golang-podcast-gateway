'use client'
import { useState, useEffect } from 'react';
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
  const [pageSize, SetPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [podcasts, setPodcasts] = useState<Array<Podcast>>();

  const { loading, refetch } = useQuery(GET_PODCASTS, {
    notifyOnNetworkStatusChange: true,
    variables: { query: `search=${search}&page=${page}&limit=${pageSize}` },
    onCompleted(res) {
      setPodcasts(res.getPodcasts);
    },
    onError(err) {
      throw err;
    }
  });

  useDebounce(() => {
    if (search !== input) {
      setSearch(input);
      SetPageSize(10);
      setPage(1)

      refetch({
        query: `search=${input}&page=${page}&limit=${pageSize}`,
      })
    }
  }, 500, [input, search]);

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-row justify-between">
        <SearchBar input={input} setInput={setInput} loading={loading} />
        <div className="flex items-center gap-4">
          <span className="text-md font-normal text-gray-800 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Show Items:
          </span>
          <PageSizeDropdown pageSize={pageSize} setPageSize={SetPageSize} />
        </div>
      </div>
      <PodcastList podcasts={podcasts} />
      <Pagination page={page} setPage={setPage} />
    </div>
  )
};

export default Home;