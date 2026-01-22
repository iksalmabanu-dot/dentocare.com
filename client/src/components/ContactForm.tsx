import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContactMutation } from "@/hooks/use-contact";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const mutation = useContactMutation();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Book an Appointment</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-12 rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-12 rounded-xl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-12 rounded-xl" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message or Preferred Time</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="I would like to book a dental checkup for this weekend..." 
                    className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-12 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Confirm Appointment"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
