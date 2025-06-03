import { Topic } from "@/components/Topic";
import { fetchTopics } from "@/lib/data";

export default async function Page() {
  const topics = await fetchTopics();

  return (
    <main className="flex flex-col items-stretch justify-stretch">
      <h1 className="mb-4 text-xl md:text-2xl">Topics</h1>
      {topics.map((topics) => (
        <Topic key={topics.id} id={topics.id} text={topics.title} />
      ))}
    </main>
  );
}
