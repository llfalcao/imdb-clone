function resizeImage(link) {
  return link.substring(0, link.indexOf('._')) + '._V1_UX256.jpg';
}

export async function getUpcomingMovies() {
  let response = await fetch(
    'https://imdb-api.com/en/API/ComingSoon/k_cr891qpm',
  );
  response = await response.json();
  const data = await response.items.map((item) => {
    if (item.image.includes('amazon')) {
      item.image = resizeImage(item.image);
    }
    return item;
  });
  return data;
}

export async function getMoviesInTheaters() {
  let response = await fetch(
    'https://imdb-api.com/en/API/InTheaters/k_cr891qpm',
  );
  response = await response.json();
  const data = await response.items.map((item) => {
    if (item.image.includes('amazon')) {
      item.image = resizeImage(item.image);
    }
    return item;
  });
  return data;
}
