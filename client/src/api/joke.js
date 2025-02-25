export async function getRandomJoke() {
  const response = await fetch("/api/dad-jokes/joke");
  const data = await response.json();
  return data.joke;
}
