"use client";

import React from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Save } from "lucide-react";

const FileUploadPlaceholder = () => (
  <div className="flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg border-muted-foreground/20 hover:border-primary/50 transition-colors cursor-pointer">
    <span className="text-muted-foreground">Click to upload or drag and drop</span>
  </div>
);

const RichTextEditorPlaceholder = () => (
  <div className="min-h-[200px] border rounded-lg p-4 bg-background">
    <div className="flex gap-2 mb-4">
      <div className="h-8 w-8 rounded bg-muted/50" />
      <div className="h-8 w-8 rounded bg-muted/50" />
      <div className="h-8 w-8 rounded bg-muted/50" />
    </div>
    <div className="space-y-2">
      <div className="h-4 w-full rounded bg-muted/50" />
      <div className="h-4 w-3/4 rounded bg-muted/50" />
    </div>
  </div>
);

interface DataFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  formType: "create" | "update";
  route: string;
  fieldTypes: {
    [K in keyof T]?: "text" | "textarea" | "file" | "richText" | "dropdown";
  };
  dropdownOptions?: { [K in keyof T]?: { value: string; label: string }[] };
}

const DataForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  route,
  fieldTypes,
  dropdownOptions,
}: DataFormProps<T>) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    console.log(data);
    router.push(route);
  };

  const buttonText = formType === "create" ? "Create" : "Update";
  const ButtonIcon = formType === "create" ? Plus : Save;

  const formatLabel = (label: string) => {
    return label
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <Card className="p-6 max-w-7xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">
                    {formatLabel(field)}
                  </FormLabel>
                  <FormControl>
                    {fieldTypes?.[field as keyof T] === "textarea" ? (
                      <Textarea
                        {...formField}
                        className="min-h-[100px] resize-y"
                      />
                    ) : fieldTypes?.[field as keyof T] === "file" ? (
                      <FileUploadPlaceholder />
                    ) : fieldTypes?.[field as keyof T] === "richText" ? (
                      <RichTextEditorPlaceholder />
                    ) : fieldTypes?.[field as keyof T] === "dropdown" ? (
                      <Select
                        onValueChange={formField.onChange}
                        defaultValue={formField.value}
                      >
                        <SelectTrigger className="w-full hover:bg-muted/50">
                          <SelectValue placeholder={`Select ${formatLabel(field)}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border">
                          {dropdownOptions?.[field as keyof T]?.map((option) => (
                            <SelectItem 
                              key={option.value} 
                              value={option.value}
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        type="text"
                        {...formField}
                        className="h-10"
                      />
                    )}
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          ))}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              className="group"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  {buttonText}
                  <ButtonIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default DataForm;
