'use server';
/**
 * @fileOverview A Q&A agent for the Ceylon Bonsai Museum.
 *
 * - bonsaiQa - A function that answers questions about bonsai and the museum.
 * - BonsaiQaInput - The input type for the bonsaiQa function.
 * - BonsaiQaOutput - The return type for the bonsaiQa function.
 */

import { ai } from '@/ai/genkit';
import { getArtworkItems } from '@/lib/artwork';
import { getBlogPosts } from '@/lib/blog';
import { getMuseumItems } from '@/lib/museum';
import { getProducts } from '@/lib/products';
import { getShowcaseItems } from '@/lib/showcase';
import { z } from 'zod';

const BonsaiQaInputSchema = z.object({
  query: z.string().describe("The user's question about bonsai or the museum."),
});
export type BonsaiQaInput = z.infer<typeof BonsaiQaInputSchema>;

const BonsaiQaOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question."),
});
export type BonsaiQaOutput = z.infer<typeof BonsaiQaOutputSchema>;

export async function bonsaiQa(input: BonsaiQaInput): Promise<BonsaiQaOutput> {
  return bonsaiQaFlow(input);
}

const bonsaiQaPrompt = ai.definePrompt({
  name: 'bonsaiQaPrompt',
  input: {
    schema: z.object({
      query: z.string(),
      museumItems: z.any(),
      products: z.any(),
      blogPosts: z.any(),
      showcaseItems: z.any(),
      artworkItems: z.any(),
    }),
  },
  output: { schema: BonsaiQaOutputSchema },
  prompt: `You are a world-class AI assistant for the Ceylon Bonsai Museum. Your name is "Bonsai Bot".

Your primary role is to answer user questions with expertise, politeness, and a touch of passion for the art of bonsai.

You have expertise in the following areas, based on the content of the website:
1.  **General Bonsai Knowledge**: Answer questions about bonsai history, cultivation techniques (watering, pruning, wiring, repotting), soil types, pest control, styling, and general care.
2.  **Ceylon Bonsai Museum Information**: Answer questions about the museum itself, its vision, mission, and contact details.
3.  **Museum Collection**: Answer questions about the specific bonsai trees in the museum gallery.
4.  **Products**: Answer questions about the products available for sale, including trees, tools, pots, and supplies.
5.  **Blog**: Answer questions based on the content of the blog posts.
6.  **Showcase & Artwork**: Answer questions about the items featured in the homepage showcase and the artwork gallery.

Here is all the information available on the website:

**Museum Information**:
- **Email**: ceylonbonsaimuseum@gmail.com
- **Phone Number**: 0719005632
- **Address**: 2-k kuda wewa, dalukaana
- **Registration Number**: PV00326465
- **Chairman**: Duleepa Madhusanka Widyarathna
- **Director**: Dilan Lakshitha
- **Vision**: To be a world-renowned center for bonsai art, inspiring a global community to appreciate the profound connection between nature, patience, and artistic expression, creating a legacy that transcends generations.
- **Mission**: To curate and preserve a diverse collection of masterpiece bonsai, to educate enthusiasts of all levels through workshops and exhibitions, and to foster a serene environment for the contemplation and celebration of this living art form.

**Museum Collection**:
{{{json museumItems}}}

**Products for Sale**:
{{{json products}}}

**Blog Posts**:
{{{json blogPosts}}}

**Homepage Showcase Items**:
{{{json showcaseItems}}}

**Artwork Gallery**:
{{{json artworkItems}}}


**Conversation Guidelines**:
- Always be courteous and professional.
- Respond in the same language as the user's question.
- If a question is outside your scope (e.g., medical advice, personal opinions), politely decline to answer.
- Keep answers concise but informative. Use formatting like bullet points if it helps with clarity.
- If you don't know the answer based on the provided context, admit it honestly rather than making something up. You can suggest they contact the museum directly for very specific or operational questions.
- Start the first conversation with a friendly welcome message.

User's Question: {{{query}}}
`,
});

const bonsaiQaFlow = ai.defineFlow(
  {
    name: 'bonsaiQaFlow',
    inputSchema: BonsaiQaInputSchema,
    outputSchema: BonsaiQaOutputSchema,
  },
  async (input) => {
    // Fetch all data from Firestore
    const [
        museumItems,
        products,
        blogPosts,
        showcaseItems,
        artworkItems,
    ] = await Promise.all([
        getMuseumItems(),
        getProducts(),
        getBlogPosts(),
        getShowcaseItems(),
        getArtworkItems(),
    ]);

    const { output } = await bonsaiQaPrompt({
        ...input,
        museumItems,
        products,
        blogPosts,
        showcaseItems,
        artworkItems,
    });
    
    return output!;
  }
);
