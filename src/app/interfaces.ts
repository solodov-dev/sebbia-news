interface Category {
  id: number,
  name: string
}

interface News {
  id: number,
  title: string,
  date: string,
  shortDescription: string,
}

interface Article {
  id: number,
  fullDescription: string,
  date: string,
  shortDescription: string,
  title: string
}

export {Category, News, Article}