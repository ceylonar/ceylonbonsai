
export interface MuseumItem {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  aiHint: string;
}

export const initialBonsaiGallery: Omit<MuseumItem, 'id'>[] = [
  {
    title: 'Ancient Juniper',
    description: 'A symbol of resilience, this Juniper has been trained for over 150 years, showcasing the art of deadwood (jin and shari).',
    image: 'https://images.unsplash.com/photo-1615794799010-49687e006646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxib25zYWklMjBqdW5pcGVyfGVufDB8fHx8MTc1NjY3NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1200,
    aiHint: 'bonsai juniper'
  },
  {
    title: 'Flowering Azalea',
    description: 'A vibrant Satsuki Azalea in full bloom. It is celebrated for its brilliant pink flowers that cover the entire canopy in late spring.',
    image: 'https://images.unsplash.com/photo-1752562466420-0f931fb618b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBhemFsZWF8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 800,
    aiHint: 'bonsai azalea'
  },
  {
    title: 'Japanese Maple',
    description: 'The elegant and iconic Japanese Maple, with its delicate, star-shaped leaves that turn a fiery red in the autumn.',
    image: 'https://images.unsplash.com/photo-1671366442931-0066431bd8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Ym9uc2FpJTIwbWFwbGV8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1000,
    aiHint: 'bonsai maple'
  },
  {
    title: 'Windswept Pine',
    description: 'This Black Pine is styled in the Fukinagashi (windswept) style, evoking a tree clinging to a windswept coastline.',
    image: 'https://images.unsplash.com/photo-1755372873864-59c747015e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxib25zYWklMjBwaW5lfGVufDB8fHx8MTc1NjY3NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 900,
    aiHint: 'bonsai pine'
  },
  {
    title: 'Miniature Jade',
    description: 'A charming Dwarf Jade styled as a Mame (miniature) bonsai, perfect for indoor display and easy to care for.',
    image: 'https://images.unsplash.com/photo-1695287743636-d2bd8f1d4784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Ym9uc2FpJTIwamFkZXxlbnwwfHx8fDE3NTY2NzU0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1200,
    aiHint: 'bonsai jade'
  },
  {
    title: 'Forest Planting',
    description: 'A Yose-ue (forest planting) of several Trident Maples, creating a miniature woodland landscape in a single pot.',
    image: 'https://images.unsplash.com/photo-1645391989895-e600dab3f447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBmb3Jlc3R8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 800,
    aiHint: 'bonsai forest'
  },
  {
    title: 'Gnarled Olive',
    description: 'An ancient olive tree with gnarled, character-rich bark, telling a story of age and survival.',
    image: 'https://images.unsplash.com/photo-1630246571862-4177df5be78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBvbGl2ZSUyMHRyZWV8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 900,
    height: 1200,
    aiHint: 'bonsai olive tree'
  },
  {
    title: 'Weeping Willow',
    description: 'A graceful weeping willow bonsai, its delicate branches cascading downwards, creating a sense of tranquility.',
    image: 'https://images.unsplash.com/photo-1723209249565-dfa2ec592924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjB3aWxsb3d8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1000,
    aiHint: 'bonsai willow'
  },
];
