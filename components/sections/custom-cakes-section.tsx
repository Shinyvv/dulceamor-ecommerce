"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CakeSlice, MessageCircleHeart } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { createWhatsAppLink } from "@/lib/whatsapp";

const customCakeSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  servings: z.string().min(1, "Selecciona porciones"),
  date: z.string().min(1, "Selecciona fecha"),
  idea: z.string().min(8, "Cuentanos mas detalles"),
});

type CustomCakeFormValues = z.infer<typeof customCakeSchema>;

export function CustomCakesSection() {
  const form = useForm<CustomCakeFormValues>({
    resolver: zodResolver(customCakeSchema),
    defaultValues: {
      name: "",
      servings: "",
      date: "",
      idea: "",
    },
  });

  const onSubmit = (values: CustomCakeFormValues) => {
    const message = [
      "Hola! Quiero una torta personalizada.",
      `Nombre: ${values.name}`,
      `Porciones: ${values.servings}`,
      `Fecha: ${values.date}`,
      `Idea: ${values.idea}`,
    ].join("\n");

    window.open(createWhatsAppLink(message), "_blank");
    toast("Formulario enviado. Te abrimos WhatsApp.", { variant: "success" });
  };

  return (
    <section id="personalizadas" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-5 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-card to-secondary/70 p-5 sm:p-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
          <CakeSlice className="size-4" />
          Pedidos especiales
        </span>

        <h2 className="font-heading text-3xl font-semibold text-foreground">
          {"Tienes una idea? Nosotros la hacemos realidad \u{1F382}"}
        </h2>

        <p className="max-w-2xl text-sm text-foreground/80 sm:text-base">
          Disenamos tortas personalizadas para cumpleanos, aniversarios y celebraciones unicas. Te asesoramos paso a paso para crear una torta inolvidable.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            className="bg-[#25d366] text-white hover:bg-[#1faa52]"
            onClick={() =>
              window.open(createWhatsAppLink("Hola! Quiero cotizar una torta personalizada."), "_blank")
            }
          >
            <MessageCircleHeart className="size-4" />
            Cotizar por WhatsApp
          </Button>

          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>Completar solicitud guiada</DialogTrigger>
            <DialogContent className="max-w-lg bg-card">
              <DialogHeader>
                <DialogTitle>Cuentanos tu idea</DialogTitle>
                <DialogDescription>
                  Te responderemos por WhatsApp con propuesta, precio y disponibilidad.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form className="grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="servings"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Porciones</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecciona porciones" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12-15">12 a 15 porciones</SelectItem>
                              <SelectItem value="20-25">20 a 25 porciones</SelectItem>
                              <SelectItem value="30+">30 o mas porciones</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha estimada</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormDescription>
                          Te recomendamos pedir con al menos 72 horas de anticipacion.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="idea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Idea y detalles</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tematica, colores, relleno, mensaje y referencias"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="mt-1 w-full bg-primary hover:bg-primary/90">
                    Enviar y abrir WhatsApp
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}



