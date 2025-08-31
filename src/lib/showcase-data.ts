
export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  aiHint: string;
}

export const initialShowcaseItems: Omit<ShowcaseItem, 'id'>[] = [
  {
    title: 'Legacy in Miniature',
    description: 'Explore ancient trees that tell stories of generations, each a living testament to history.',
    image: 'https://images.unsplash.com/photo-1641412722397-3be359096577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxib25zYWklMjB0cmVlfGVufDB8fHx8MTc1NjY3MzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 720,
    aiHint: 'old bonsai'
  },
  {
    title: 'Techniques and Tributes',
    description: 'Witness the meticulous care and artistry in every branch, a tribute to traditional methods.',
    image: 'https://images.unsplash.com/photo-1690775937793-79a0f80fbbd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8c3JpJTIwbGFua2FuJTIwYm9uc2FpfGVufDB8fHx8MTc1NjY3MzYzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 600,
    aiHint: 'bonsai pruning'
  },
  {
    title: 'Nature\'s Sculpture',
    description: 'Discover the dynamic forms and natural beauty sculpted by artists and time itself.',
    image: 'https://images.unsplash.com/photo-1729111146534-b21ffd532682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8Ym9uc2FpJTIwdHJlZSUyMGltYWdlfGVufDB8fHx8MTc1NjY3MzcxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 600,
    aiHint: 'sculpted bonsai'
  },
];
