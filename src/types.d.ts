export interface IPostForm {
  author:'',
  category: '',
  quoteText:'',
}

export interface IGetQuote {
  quote: {         author: "";         category: "";         quoteText: "";     };
}
export interface IQuotes {
  id: string,
  author:string,
  quoteText: string,
}
