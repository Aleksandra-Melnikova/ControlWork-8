export interface IQuoteForm {
  author: string;
  category: string;
  quoteText: string;
}

export interface IQuoteFormModifications {
  author: string;
  category: string;
  quoteText: string;
  id: string;
}

export interface IGetQuote {
  quote: { author: string; category: string; quoteText: string };
}
export interface IQuotes {
  id: string;
  author: string;
  quoteText: string;
}

