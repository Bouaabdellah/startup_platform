import { client } from '@/sanity/lib/client';
import { getAuthorStartups } from '@/sanity/lib/queries';
import StartupCard from './StartupCard';
import { StartupCardType } from '@/types/sanity';

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client
    .withConfig({ useCdn: false })
    .fetch(getAuthorStartups, { id });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((s: StartupCardType) => (
          <StartupCard startup={s} key={s._id} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};

export default UserStartups;
