export interface Home {
  benefits: HomeBenefit[];
  courses: HomeCourse[];
  testimonials: HomeTestimonial[];
}

export interface HomeBenefit {
  number: string;
  title: string;
  description: string;
}

export interface HomeCourse {
  id: string;
  name: string;
  slug: string;
  teaser: string;
  teaserImage: string;
  skillLevel: string;
  expectedCompletionWeeks: number;
  instructorName: string;
}

export interface HomeTestimonial {
  authorName: string;
  authorPicture: string;
  quote: string;
}
