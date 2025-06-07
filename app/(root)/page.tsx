import SearchForm from "@/components/ui/SearchForm";

export default async function Home({searchParams} : {searchParams : Promise<{query? : string}>}) {
  const query = (await searchParams).query;

  return (
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
  );
}
