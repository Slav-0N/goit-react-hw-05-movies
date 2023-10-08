const defaultImgUrl = 'https://fakeimg.pl/500x800?font=bebas';
export const getPoster = url =>
  url ? `https://image.tmdb.org/t/p/w500/${url}` : defaultImgUrl;
