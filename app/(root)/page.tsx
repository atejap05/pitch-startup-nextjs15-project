import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { type StartupCardType } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "2021-09-29T14:00:00Z",
      views: 5,
      author: { _id: "1", name: "John Doe Alves Perera" },
      _id: "1",
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8fDA%3D",
      category: "Tech",
      title: "Startup 1",
    },
    {
      _createdAt: "2021-09-29T14:00:00Z",
      views: 5,
      author: { _id: "1", name: "John Doe Alves Perera" },
      _id: "2",
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8fDA%3D",
      category: "Tech",
      title: "Startup 1",
    },
    {
      _createdAt: "2021-09-29T14:00:00Z",
      views: 5,
      author: { _id: "1", name: "John Doe Alves Perera" },
      _id: "3",
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8fDA%3D",
      category: "Tech",
      title: "Startup 1",
    },
    {
      _createdAt: "2021-09-29T14:00:00Z",
      views: 5,
      author: { _id: "1", name: "John Doe Alves Perera" },
      _id: "4",
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8fDA%3D",
      category: "Tech",
      title: "Startup 1",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Ptich Your Startup, Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.map((post: StartupCardType) => (
            <StartupCard key={post?._id} {...post} />
          ))}
        </ul>
      </section>
    </>
  );
}
