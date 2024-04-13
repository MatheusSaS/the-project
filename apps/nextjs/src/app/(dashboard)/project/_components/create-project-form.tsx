"use client";

import { useRouter } from "next/navigation";
import type { FieldErrors } from "react-hook-form";

import type { CreateProject } from "@theproject/api/validators";
import { createProjectSchema } from "@theproject/api/validators";
import { Button } from "@theproject/ui/button";
import {
  Form,
  FormContent,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@theproject/ui/form";
import { Input } from "@theproject/ui/input";
import { Textarea } from "@theproject/ui/textarea";
import { useToast } from "@theproject/ui/use-toast";

import { useZodForm } from "~/lib/zod-form";
import { api } from "~/trpc/client";

export const CreateProjectForm = (props: {
  onSuccess?: (project: CreateProject & { id: string }) => void;
}) => {
  const router = useRouter();
  const toaster = useToast();
  const onError = (errors: FieldErrors) => {
    console.error("Erros de validação:", errors);
    // Você pode adicionar qualquer lógica aqui para lidar com os erros de validação
  };

  const form = useZodForm({ schema: createProjectSchema });

  async function onSubmit(data: CreateProject) {
    try {
      const projectId = await api.project.create.mutate(data);
      if (props.onSuccess) {
        props.onSuccess({
          ...data,
          id: projectId,
        });
      } else {
        router.push(`/dashboard`);
      }
      toaster.toast({
        title: "Project created",
        description: `Project ${data.name} created successfully.`,
      });
    } catch (error) {
      toaster.toast({
        title: "Error creating project",
        variant: "destructive",
        description:
          "An issue occurred while creating your project. Please try again.",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-4"
        >
          <FormContent title="Detalhes" description="Nome, descrição, url...">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="theproject Corp" />
                  </FormControl>
                  <FormDescription>
                    Um nome para identificar seu aplicativo no painel.
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://theproject-corp.com"
                    />
                  </FormControl>
                  <FormDescription>O URL do seu aplicativo</FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="mt-5 flex justify-end">
              <Button htmlType="submit">Create Project</Button>
            </div>
          </FormContent>
        </form>
      </Form>
    </>
  );
};
