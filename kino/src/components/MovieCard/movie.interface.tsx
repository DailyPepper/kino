import { ReactNode } from "react";

export interface IMovie {
    releaseYear: ReactNode;
    poster: string | undefined;
    name: string;
    image: string; 
    rating: number;
    date: string | Date;
  }
  