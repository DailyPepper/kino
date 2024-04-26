
export interface Movie {
    id: number;
    name: string;
    rating: number;
    poster: {
      url: string | null;
      previewUrl: string | null;
    };
    year: number;
    persons: unknown[];
    lists: string[];
}