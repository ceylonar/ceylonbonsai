
export interface ArtworkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  aiHint: string;
}

export const initialArtworkItems: Omit<ArtworkItem, 'id'>[] = [
  {
    title: 'Serenity in Ink',
    description: 'A traditional ink wash painting capturing the spirit of a windswept bonsai against a stark, beautiful backdrop.',
    image: 'https://images.unsplash.com/photo-1676182123614-3e1f67fd38f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxib25zYWklMjBwYWludGluZ3xlbnwwfHx8fDE3NTY2NzMyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1080,
    aiHint: 'bonsai painting'
  },
  {
    title: 'Digital Zen',
    description: 'A vibrant, abstract interpretation of a bonsai, blending technology with traditional meditative art forms.',
    image: 'https://images.unsplash.com/photo-1611387729672-25583e070328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJvbnNhaSUyMGFydHxlbnwwfHx8fDE3NTY2NzMyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1080,
    aiHint: 'abstract bonsai art'
  },
  {
    title: 'Sculpted from Light',
    description: 'A stunning photographic piece where light and shadow dance to reveal the intricate, sculptural form of a bonsai.',
    image: 'https://images.unsplash.com/photo-1632161286719-5afe9b5d954b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxib25zYWklMjB0cmVlfGVufDB8fHx8MTc1NjY3MzQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1350,
    aiHint: 'bonsai tree'
  },
  {
    title: 'Ethereal Weave',
    description: 'A delicate digital weaving of light, color, and texture, capturing the ethereal spirit and essence of a bonsai tree.',
    image: 'https://images.unsplash.com/photo-1683491175728-5921087a95ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkaWdpdGFsJTIwYm9uc2FpJTIwYXJ0fGVufDB8fHx8MTc1NjY3MzI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1080,
    aiHint: 'digital bonsai art'
  }
];
