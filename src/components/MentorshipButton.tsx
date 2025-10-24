import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(100, "Full name must be less than 100 characters"),
  currentRole: z.string().trim().min(2, "Current role is required").max(100, "Current role must be less than 100 characters"),
  background: z.string().trim().min(10, "Please provide at least 10 characters").max(500, "Please keep it under 500 characters"),
  purpose: z.string().trim().min(20, "Please provide at least 20 characters explaining your purpose").max(1000, "Please keep it under 1000 characters"),
  skills: z.string().trim().min(2, "Please specify skills or type 'N/A'").max(500, "Please keep it under 500 characters"),
  experience: z.string().trim().min(2, "Please provide experience or type 'N/A'").max(500, "Please keep it under 500 characters"),
  contact: z.string().trim().email("Please provide a valid email address").max(255, "Email must be less than 255 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const MentorshipButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      currentRole: "",
      background: "",
      purpose: "",
      skills: "",
      experience: "",
      contact: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Mentorship request submitted:", data);
    form.reset();
    setIsFormOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <>
      {/* Floating Mentorship Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-primary shadow-lg hover:shadow-primary flex items-center justify-center group hover:scale-110 transition-all duration-300 animate-fade-in"
        aria-label="Request Mentorship"
      >
        <HandHeart className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>

      {/* Mentorship Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">Request Mentorship</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will connect you with the right mentor.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role or Position</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Student, Intern, Analyst, Developer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="background"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Educational Background or Professional Experience</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your educational background or professional experience..."
                        className="min-h-[80px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose of the Request</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Why are you seeking mentorship? What do you hope to achieve?"
                        className="min-h-[80px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Skills or Knowledge You Want to Develop</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List the skills or areas of knowledge you want to develop (or type 'N/A' if unsure)"
                        className="min-h-[80px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relevant Experience or Skills</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe any relevant experience or skills you have (or type 'N/A' if none)"
                        className="min-h-[80px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Information (Email)</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-gradient-primary hover:shadow-primary">
                  Submit Request
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Success Confirmation Dialog */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Thank You!</DialogTitle>
            <DialogDescription className="text-base pt-4 text-center">
              Your mentorship request has been received. Our team will contact you soon regarding your mentorship request.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsSuccessOpen(false)} className="w-full bg-gradient-primary">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MentorshipButton;
