import { Startup, Author } from "@/sanity/types";

export type StartupCardType = Omit<Startup, 'author'> & {'author' : Author}; 