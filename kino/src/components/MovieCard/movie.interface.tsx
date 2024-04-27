
export interface Movie {
  videos: string;
  releaseYear: number;
  year: number;
  movieLength: string;
  description: string;
  rating: {
    await: string
  };
  id?: number;
  name: string;
  alternativeName: string;
  enName: string | null;
  names: { name: string; language: string | null; type: string }[];
  poster: {
    url: string | null;
    previewUrl: string | null;
  };
  top250: number | null;
}