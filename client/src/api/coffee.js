// I put this here because we use it multiple places

export async function getRandomCoffeeSrc() {
  const response = await fetch("/api/random-coffee");
  const json = await response.json();
  return json.src;
}
