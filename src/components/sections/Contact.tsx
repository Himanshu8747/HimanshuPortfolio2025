import { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

// Define types for the component
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Message {
  text: string;
  sender: 'bot' | 'user';
}

export function Contact() {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'd love to chat with you. What's your name?", sender: 'bot' }
  ]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const advanceStep = () => {
    if (step === 0 && formData.name) {
      // Immediately add the user's message
      setMessages([
        ...messages,
        { text: formData.name, sender: 'user' }
      ]);
      
      // Then show typing indicator and add bot's response after delay
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: `Nice to meet you, ${formData.name}! How can I reach you back?`, sender: 'bot' }
        ]);
        setIsTyping(false);
        setStep(1);
      }, 1000);
    } else if (step === 1 && formData.email) {
      // Immediately add the user's message
      setMessages([
        ...messages,
        { text: formData.email, sender: 'user' }
      ]);
      
      // Then show typing indicator and add bot's response after delay
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "Great! What would you like to talk about?", sender: 'bot' }
        ]);
        setIsTyping(false);
        setStep(2);
      }, 1000);
    } else if (step === 2 && formData.message) {
      // Immediately add the user's message
      setMessages([
        ...messages,
        { text: formData.message, sender: 'user' }
      ]);
      
      // Then show typing indicator and add bot's response after delay
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "Thanks for reaching out! I'll get back to you as soon as possible.", sender: 'bot' }
        ]);
        setIsTyping(false);
        setStep(3);
      }, 1500);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      advanceStep();
    }
  };

  // Only scroll within the chat container and only after user interaction
  useEffect(() => {
    if (messages.length > 1 && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-20 bg-muted/30" id='contact'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
        
        <Card className="max-w-2xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-primary/10 p-4 flex items-center gap-3 border-b">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <p className="font-medium">Chat with us</p>
            </div>
            
            <div ref={messagesContainerRef} className="h-96 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: msg.sender === 'user' ? 0 : 0.1, 
                    duration: 0.2 
                  }}
                  className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-md rounded-2xl px-4 py-2 ${
                      msg.sender === 'bot'
                        ? 'bg-muted rounded-tl-none'
                        : 'bg-primary text-primary-foreground rounded-br-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-2">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        className="h-2 w-2 bg-foreground/50 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }}
                        className="h-2 w-2 bg-foreground/50 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
                        className="h-2 w-2 bg-foreground/50 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t">
              {step === 0 && (
                <div className="flex gap-3">
                  <div className="flex-grow flex gap-2 items-center bg-muted/50 rounded-lg px-3">
                    <User size={18} className="text-muted-foreground" />
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="border-0 focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <motion.div
                    variants={sendButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      type="button"
                      onClick={advanceStep}
                      disabled={!formData.name}
                      className="rounded-full aspect-square p-0 w-10 h-10"
                    >
                      <Send size={18} />
                    </Button>
                  </motion.div>
                </div>
              )}
              
              {step === 1 && (
                <div className="flex gap-3">
                  <div className="flex-grow flex gap-2 items-center bg-muted/50 rounded-lg px-3">
                    <Mail size={18} className="text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="border-0 focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <motion.div
                    variants={sendButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      type="button"
                      onClick={advanceStep}
                      disabled={!formData.email}
                      className="rounded-full aspect-square p-0 w-10 h-10"
                    >
                      <Send size={18} />
                    </Button>
                  </motion.div>
                </div>
              )}
              
              {step === 2 && (
                <div className="flex gap-3">
                  <div className="flex-grow flex gap-2 bg-muted/50 rounded-lg px-3 py-2">
                    <MessageSquare size={18} className="text-muted-foreground mt-1" />
                    <Textarea
                      placeholder="Your message"
                      value={formData.message}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('message', e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="border-0 focus-visible:ring-0 bg-transparent resize-none min-h-[100px]"
                    />
                  </div>
                  <motion.div
                    variants={sendButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      type="button"
                      onClick={advanceStep}
                      disabled={!formData.message}
                      className="rounded-full aspect-square p-0 w-10 h-10"
                    >
                      <Send size={18} />
                    </Button>
                  </motion.div>
                </div>
              )}
              
              {step === 3 && (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <Button
                      onClick={() => {
                        setStep(0);
                        setFormData({ name: '', email: '', message: '' });
                        setMessages([{ text: "Hi there! I'd love to chat with you. What's your name?", sender: 'bot' }]);
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Start a new conversation
                    </Button>
                  </motion.div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}