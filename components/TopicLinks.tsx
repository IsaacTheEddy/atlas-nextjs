import { fetchTopics } from "@/lib/data";
import TopicLink from "./TopicLink";

export default async function TopicLinks() {
  const topics = await fetchTopics();

  return (
    <>
      {topics.map((topic) => {
        return <TopicLink key={topic.id} id={topic.id} title={topic.title} />;
      })}
    </>
  );
}
