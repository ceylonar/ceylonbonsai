
'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { bonsaiQa } from '@/ai/flows/bonsai-qa-flow';
import { Bot, User, CornerDownLeft, Loader2, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { useMounted } from '@/hooks/use-mounted';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: "Welcome to the Ceylon Bonsai Museum's Q&A. How can I help you today? Feel free to ask me anything about bonsai care, history, or our museum.",
  },
];

export default function QAAgentPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mounted = useMounted();

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await bonsaiQa({ query: input });
      const assistantMessage: Message = { role: 'assistant', content: response.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Sorry, something went wrong. ${errorMessage}`);
      const assistantMessage: Message = { role: 'assistant', content: "My apologies, I'm unable to respond at the moment. Please try again later." };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const MessageAvatar = ({ role }: { role: 'user' | 'assistant' }) => (
    <Avatar className="h-8 w-8">
      <AvatarImage src={role === 'user' ? '/user-avatar.png' : '/bonsai-avatar.png'} />
      <AvatarFallback>
        {role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </AvatarFallback>
    </Avatar>
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-headline text-primary">AI Bonsai Assistant</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personal guide to the world of bonsai.
          </p>
        </div>
        <Card className="flex-grow flex flex-col shadow-2xl border-t-4 border-primary w-full max-w-4xl mx-auto">
          <CardContent className="p-0 flex flex-col flex-grow">
            <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
              <div className="space-y-6">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        'flex items-start gap-4',
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.role === 'assistant' && <MessageAvatar role="assistant" />}
                      <div
                        className={cn(
                          'max-w-md lg:max-w-xl px-4 py-3 rounded-xl shadow',
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background'
                        )}
                      >
                        <p className="text-sm leading-relaxed whitespace-normal">{message.content}</p>
                      </div>
                       {message.role === 'user' && <MessageAvatar role="user" />}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4 justify-start"
                  >
                    <MessageAvatar role="assistant" />
                    <div className="bg-background px-4 py-3 rounded-xl shadow flex items-center space-x-2">
                       <Loader2 className="h-5 w-5 animate-spin text-primary" />
                       <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>
            <div className="border-t p-4 bg-background/80">
             {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about bonsai care, history, or our museum..."
                  className="flex-grow"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <CornerDownLeft className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
               <p className="text-xs text-muted-foreground mt-2 text-center">
                 AI responses may not always be perfect. Please consult with a professional for critical advice.
               </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
