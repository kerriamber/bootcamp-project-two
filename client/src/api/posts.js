export async function getAllPosts() {
  const response = await fetch("/api/posts");
  const json = await response.json();
  
  return json;
}
