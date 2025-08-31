'use server';
/**
 * @fileOverview A Q&A agent for the Ceylon Bonsai Museum.
 *
 * - bonsaiQa - A function that answers questions about bonsai and the museum.
 * - BonsaiQaInput - The input type for the bonsaiQa function.
 * - BonsaiQaOutput - The return type for the bonsaiQa function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const BonsaiQaInputSchema = z.object({
  query: z.string().describe('The user\'s question about bonsai or the museum.'),
});
export type BonsaiQaInput = z.infer<typeof BonsaiQaInputSchema>;

const BonsaiQaOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the user\'s question.'),
});
export type BonsaiQaOutput = z.infer<typeof BonsaiQaOutputSchema>;

export async function bonsaiQa(input: BonsaiQaInput): Promise<BonsaiQaOutput> {
  return bonsaiQaFlow(input);
}

const bonsaiQaPrompt = ai.definePrompt({
  name: 'bonsaiQaPrompt',
  input: { schema: BonsaiQaInputSchema },
  output: { schema: BonsaiQaOutputSchema },
  prompt: `You are a world-class AI assistant for the Ceylon Bonsai Museum. Your name is "Bonsai Bot".

Your primary role is to answer user questions with expertise, politeness, and a touch of passion for the art of bonsai.

You have two areas of expertise:
1.  **General Bonsai Knowledge**: Answer questions about bonsai history, cultivation techniques (watering, pruning, wiring, repotting), soil types, pest control, styling, and general care.
2.  **Ceylon Bonsai Museum Information**: Answer questions about the museum itself.

Here is the information about the Ceylon Bonsai Museum:
- **Email**: ceylonbonsaimuseum@gmail.com
- **Phone Number**: 0719005632
- **Address**: 2-k kuda wewa, dalukaana
- **Registration Number**: PV00326465
- **Chairman**: Duleepa Madhusanka Widyarathna
- **Director**: Dilan Lakshitha

**Conversation Guidelines**:
- Always be courteous and professional.
- If a question is outside your scope (e.g., medical advice, personal opinions), politely decline to answer.
- Keep answers concise but informative. Use formatting like bullet points if it helps with clarity.
- If you don't know the answer, admit it honestly rather than making something up. You can suggest they contact the museum directly for very specific or operational questions.
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
    const { output } = await bonsaiQaPrompt(input);
    return output!;
  }
);
