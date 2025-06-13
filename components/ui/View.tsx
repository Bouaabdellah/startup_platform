import { client } from '@/sanity/lib/client';
import Ping from './Ping';
import { getViews } from '@/sanity/lib/queries';

const View = async ({ id }: { id: string }) => {
  const { views } = await client
    .withConfig({
      useCdn: false,
    })
    .fetch(getViews, { id });
  // here we use the new query instead of get views from startup card because we want to make get Views dynamic not using ISR
  const pluralize = (): string => {
    return views > 1 ? 'Views' : 'View';
  };

  return (
    <div className="view-container">
      <Ping />
      <p className="view-text">
        <span className="font-black">{`${views} ${pluralize()}`}</span>
      </p>
    </div>
  );
};

export default View;
