export default async function page() {
  const content = await fetch("http://localhost:3000/tutorials/html.md");
  const text = content.text();
  return <div>{text}</div>;
}
