"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from 'zod';
import { PhoneInput } from '../PhoneInput/PhoneInput';
import { isValidPhoneNumber } from "react-phone-number-input";
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useState} from "react";

const FormActionSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email('Invalid email format'),
    phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    message: z.string().min(3),
    contactBack: z.boolean().default(false).refine((value) => value === true, { message: "You must agree with this condition"})
});

export default function FormAction()
{
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof FormActionSchema>>({
        resolver: zodResolver(FormActionSchema),
        defaultValues: { 
            firstName: '', 
            lastName: '',
            email: '',
            phone: '',
            message: '',
            contactBack: false
        },
      });

      const onSubmit = async (values: z.infer<typeof FormActionSchema>) => {
        try {
            setLoading(true);
            const response = await fetch('/api/email', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(values)
            })

            if(response.status != 200)
                throw new Error("Send Email Failed!");
                
            form.reset();
            toast({title: 'Send Email Success!', variant: 'success'});
        } catch (error) {
            toast({title: 'Send Email Failed!', variant: 'failed'})
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-[1rem]">
                        <FormLabel className='text-[1.6rem] uppercase'>First Name</FormLabel>
                        <FormControl>
                            <Input className="pl-[2rem] rounded-[1rem] h-[4.5rem] text-[1.6rem] !mt-0 placeholder:text-[#282828]/40" placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-[1rem]">
                        <FormLabel className='text-[1.6rem] uppercase'>Last Name</FormLabel>
                        <FormControl>
                            <Input className="pl-[2rem] rounded-[1rem] h-[4.5rem] text-[1.6rem] !mt-0 placeholder:text-[#282828]/40" placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-[1rem]">
                        <FormLabel className='text-[1.6rem] uppercase'>Email Address</FormLabel>
                        <FormControl>
                            <Input className="pl-[2rem] rounded-[1rem] h-[4.5rem] text-[1.6rem] !mt-0 placeholder:text-[#282828]/40" placeholder="john.tourist@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-[1rem]">
                        <FormLabel className="text-[1.6rem] uppercase">Telephone</FormLabel>
                        <FormControl className="w-full">
                            <PhoneInput className="flex items-center gap-[1rem] placeholder:text-[#282828]/40" placeholder="Enter a phone number" defaultCountry='AU' international  {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-[1rem]">
                        <FormLabel className="text-[1.6rem] uppercase">Your Message</FormLabel>
                        <FormControl className="w-full">
                            <Textarea className="resize-none px-[2rem] py-[1.3rem] rounded-[1rem] h-[4.5rem] text-[1.6rem] !mt-0 placeholder:text-[#282828]/40" placeholder='I’m interested in customizing my trip.' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="contactBack"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-[1rem] relative">
                        <FormControl>
                            <Checkbox
                                className="w-[1.5rem] h-[1.5rem] rounded-[.2rem] border border-c-blue-dark aspect-square"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                            <FormLabel className='text-[1.4rem] text-c-black'>
                                I’m happy for you to contact me using the above details
                            </FormLabel>
                            <FormMessage className='absolute -bottom-6 left-0' />
                        </FormItem>
                    )}
                    />
                    <Button className='w-full !mt-[10rem]' type='submit' disabled={loading}>Send Enquiry</Button>
                    <Toaster />
            </form>
        </Form>
    )

}