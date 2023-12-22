import NoTableData from '../NoTableData';
import { Podcast } from '@/app/types/podcast.type';

type PodcastListProps = {
  podcasts: Podcast[];
};

const PodcastList = ({ podcasts }: PodcastListProps) => (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400">
      <thead className="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Id
          </th>
          <th scope="col" className="px-16 py-3">
            <span className="sr-only">Image</span>
          </th>
          <th scope="col" className="px-6 py-3">
            Podcast ID
          </th>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {podcasts.length === 0 ? (
          <tr>
            <td colSpan={5}>
              <NoTableData />
            </td>
          </tr>
        ) : podcasts.map((item, index) => (
          <tr key={index+1} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
            <td className="p-4">
              {index+1}
            </td>
            <td className="p-4">
              <img src={item.images.thumbnail} className="w-16 md:w-32 max-w-full max-h-full" alt="podcast image" />
            </td>
            <td className="px-6 py-4 font-semibold text-white">
              {item.id}
            </td>
            <td className="px-6 py-4">
              {item.title}
            </td>
            <td className="px-6 py-4 font-semibold text-white">
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PodcastList;