import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { InsertContactMessage } from "@shared/schema";

export function useContactMutation() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Try to parse validation error
        try {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to send message");
        } catch (e) {
          throw new Error("Failed to send message");
        }
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you shortly to confirm your appointment.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
