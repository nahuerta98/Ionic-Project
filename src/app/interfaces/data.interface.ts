interface data {
  info: Info;
  results: character[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}