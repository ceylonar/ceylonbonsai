
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  width: number;
  height: number;
  aiHint: string;
  publishedAt: string; // Stored as ISO string
}

export const initialBlogPosts: Omit<BlogPost, 'id'>[] = [
  {
    title: 'The Art of Patience: A Beginner\'s Guide to Bonsai',
    content: 'Bonsai is more than just a tiny tree; it\'s a journey of patience, dedication, and a deep connection with nature. In this post, we\'ll explore the fundamental principles of starting your first bonsai, from choosing the right tree to the basics of pruning and wiring. Discover how this ancient art form can bring a sense of tranquility and accomplishment to your life. We believe that anyone can start this rewarding hobby with a little guidance and a lot of heart.',
    image: 'https://images.unsplash.com/photo-1579583793263-909d2d09852f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxib25zYWklMjBiZWdpbm5lcnxlbnwwfHx8fDE3NTk4NDg5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 800,
    aiHint: 'bonsai beginner',
    publishedAt: new Date('2024-07-15T10:00:00Z').toISOString(),
  },
  {
    title: 'Choosing the Right Pot for Your Bonsai',
    content: 'The pot is a critical component of a bonsai\'s overall aesthetic and health. It\'s not just a container; it\'s the frame that completes the masterpiece. This guide will walk you through the different styles, sizes, and colors of bonsai pots, helping you select the perfect one to complement your tree\'s unique character. We\'ll cover everything from unglazed and glazed pots to the importance of proper drainage.',
    image: 'https://images.unsplash.com/photo-1598350742821-481168f550fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBwb3R8ZW58MHx8fHwxNzU2Njc1MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 800,
    aiHint: 'bonsai pot',
    publishedAt: new Date('2024-07-22T10:00:00Z').toISOString(),
  },
  {
    title: 'Seasonal Care: Preparing Your Bonsai for Winter',
    content: 'As the seasons change, so do the needs of your bonsai. Winter dormancy is a crucial period for many bonsai species. Learn how to properly protect your trees from the cold, what to do about watering, and how to prepare them for a healthy spring revival. We\'ll discuss the differences in care for deciduous and coniferous trees during the colder months.',
    image: 'https://images.unsplash.com/photo-1671366442931-0066431bd8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Ym9uc2FpJTIwbWFwbGV8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 800,
    aiHint: 'winter bonsai',
    publishedAt: new Date('2024-07-29T10:00:00Z').toISOString(),
  },
];
