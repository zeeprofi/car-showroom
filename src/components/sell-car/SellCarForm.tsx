import React, { useState } from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SellCarFormValues, sellCarFormSchema } from '@/schemas/sellCarSchema';
import PersonalInfoForm from './PersonalInfoForm';
import CarDetailsForm from './CarDetailsForm';
import CarPhotoUpload from './CarPhotoUpload';
import { useTheme } from '@/providers/ThemeProvider';

const SellCarForm = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Initialize the form
  const form = useForm<SellCarFormValues>({
    resolver: zodResolver(sellCarFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      carMake: '',
      carModel: '',
      year: '',
      mileage: '',
      fuelType: '',
      transmission: '',
      condition: '',
      expectedPrice: '',
      description: '',
      agreeToTerms: false,
    },
  });
  
  // Handle form submission
  const onSubmit = async (values: SellCarFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API request with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form values:', values);
      console.log('Uploaded files:', files);
      
      toast({
        title: "Submission successful!",
        description: "We've received your car details. Our team will contact you soon.",
      });
      
      // Reset form
      form.reset();
      setFiles([]);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your car details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle file uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  // Remove a file from the list
  const removeFile = (indexToRemove: number) => {
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-[#FEF7CD]' : ''}`}>Car Details Form</h2>
          <div className={`p-8 rounded-xl shadow-lg border ${isDark ? 'bg-black border-[#333]' : 'bg-white border-gray-100'}`}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <PersonalInfoForm form={form} />
                {/* Car Details */}
                <CarDetailsForm form={form} />
                {/* Car Photos */}
                <CarPhotoUpload
                  files={files}
                  handleFileChange={handleFileChange}
                  removeFile={removeFile}
                />
                {/* Terms and Conditions */}
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className={isDark ? "text-[#FEF7CD]" : ""}>
                          I agree to the <a href="#" className="text-primary underline">terms and conditions</a> and <a href="#" className="text-primary underline">privacy policy</a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className={`w-full md:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90 ${isDark ? 'text-[#FEF7CD]' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Car Details'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCarForm;
