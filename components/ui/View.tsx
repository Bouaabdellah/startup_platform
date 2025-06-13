import { unstable_after as after } from 'next/server';
import { client } from '@/sanity/lib/client';
import Ping from './Ping';
import { getViews } from '@/sanity/lib/queries';
import { writeClient } from '@/sanity/lib/writeClient';

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({
      useCdn: false,
    })
    .fetch(getViews, { id });
  // here we use the new query instead of get views from startup card because we want to make get Views dynamic not using ISR
  const pluralize = (): string => {
    return totalViews > 1 ? 'Views' : 'View';
  };

  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
  });

  return (
    <div className="view-container">
      <Ping />
      <p className="view-text">
        <span className="font-black">{`${totalViews} ${pluralize()}`}</span>
      </p>
    </div>
  );
};

export default View;
