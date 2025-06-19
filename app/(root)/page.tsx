import { auth } from '@/auth';
import StartupCard from '@/components/layout/StartupCard';
import SearchForm from '@/components/ui/SearchForm';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { getStartup } from '@/sanity/lib/queries';
import { StartupCardType } from '@/types/sanity';

export const revalidate = 60;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({
    query: getStartup,
    params,
  });

  const session = await auth();
  console.log('session : ' + session?.id);

  return (
    <>
      <section className="pink_container flex flex-col items-center">
        <div className="tag">pitch, vote, and grow</div>
        <h1 className="heading">
          pitch your startup
          <br />
          connect with entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold mb-4">
          {query ? `serach results for "${query}"` : `All Startups`}
        </p>
        <ul className="card_grid">
          {posts?.length > 0 ? (
            posts.map((startup: StartupCardType) => (
              <StartupCard key={startup?._id} startup={startup} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
