export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await new Promise((r) => setTimeout(r, 3000));
  return <div>Topics Page: {id}</div>;
}
