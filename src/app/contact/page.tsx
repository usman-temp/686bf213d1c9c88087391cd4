import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Submission failed');
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 font-mono">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold font-mono">Get in Touch</h2>
          <p className="text-foreground/80">
            Have questions or feedback? Reach out to our team.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="i-lucide-mail opacity-50 w-5 h-5" />
              support@example.com
            </p>
            <p className="flex items-center gap-2">
              <span className="i-lucide-phone opacity-50 w-5 h-5" />
              +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2">
              <span className="i-lucide-map-pin opacity-50 w-5 h-5" />
              123 Tech Street, Silicon Valley, CA
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                {...register('name')}
                className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/20"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                {...register('email')}
                className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/20"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                {...register('subject')}
                className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/20"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/20"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors font-mono"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
