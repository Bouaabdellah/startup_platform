import StartupCard from "@/components/layout/StartupCard";
import SearchForm from "@/components/ui/SearchForm";

export default async function Home({searchParams} : {searchParams : Promise<{query? : string}>}) {
  const query = (await searchParams).query;
  const posts = [{
    createAt : '2005-09-29',
    views : 200, 
    author : {
      id : 1,
      name : 'Bouabdellah',
      image : 'https://placehold.co/48*48'
    }, 
    title : 'Khdamli', 
    image : '', 
    description : 'react native mobile application', 
    category : 'mobile development', 
    id : 1
  }];

  return (
    <>
      <section className="pink_container flex flex-col items-center">
        <div className="tag">
          pitch, vote, and grow
        </div>
        <h1 className="heading">
          pitch your startup
          <br />
          connect with entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions 
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold mb-4">
          {query ? `serach results for "${query}"` : `All Startups`}
        </p>
        <ul className="card_grid">
        {
          posts.map(e => <StartupCard key={e.id} startup={e}/>)
        }
        </ul>
      </section>
    </>
  );
}
