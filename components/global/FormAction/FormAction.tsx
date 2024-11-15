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
                    <FormItem>
                        <FormLabel className='text-xl uppercase'>First Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-xl uppercase'>Last Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-xl uppercase'>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="john.tourist@gmail.com" {...field} />
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
                        <FormLabel className="text-xl uppercase">Telephone</FormLabel>
                        <FormControl className="w-full">
                            <PhoneInput placeholder="Enter a phone number" defaultCountry='AU' international  {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl uppercase">Your Message</FormLabel>
                        <FormControl className="w-full">
                            <Textarea className="resize-none" placeholder='I’m interested in customizing my trip.' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="contactBack"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-y-0 space-x-3 relative">
                        <FormControl>
                            <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            />
                        </FormControl>
                            <FormLabel className='text-lg'>
                                I’m happy for you to contact me using the above details
                            </FormLabel>
                            <FormMessage className='absolute -bottom-6 left-0' />
                        </FormItem>
                    )}
                    />
                    <Button className='w-full !mt-16' type='submit' disabled={loading}>Send Enquiry</Button>
                    <Toaster />
            </form>
        </Form>
    )

}