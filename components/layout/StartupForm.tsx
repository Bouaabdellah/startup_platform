'use client';

import { useActionState, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import MDEditor from '@uiw/react-md-editor';
import { Send } from 'lucide-react';
import { formSchema } from '@/lib/validation';
import { ZodError } from 'zod';

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState<string>('');

  const handleFormSubmit = async (prevState: any, form: FormData) => {
    try {
      const formValues = {
        title: form.get('title') as string,
        description: form.get('description') as string,
        category: form.get('category') as string,
        image: form.get('image') as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      return {
        ...prevState,
        error : '',
        state : 'SUCCESS'
      };
    } catch (error) {
      if (error instanceof ZodError) {
        const { fieldErrors } = error.flatten();
        setErrors(fieldErrors as unknown as Record<string, string>);
      }

      return {
        ...prevState,
        error: 'Invalid form submission',
        state: 'ERROR',
      };
    }
  };
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    errors,
    state: 'INITIAL_STATE',
  });

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
        {errors?.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />
        {errors?.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Health, Tech..)"
        />
        {errors?.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="image" className="startup-form_label">
          image
        </label>
        <Input
          id="image"
          name="image"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />
        {errors?.image && <p className="startup-form_error">{errors.image}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor
          id="pitch"
          preview="edit"
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          height={300}
          style={{ borderRadius: 20, overflow: 'hidden' }}
          previewOptions={{
            disallowedElements: ['style'],
          }}
          textareaProps={{
            placeholder:
              'Briefly describe your idea and what problem it solves',
          }}
        />
        {errors?.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>

      <Button className="startup-form_btn" disabled={isPending} type="submit">
        {isPending ? 'Submitting...' : 'Submit Your Pitch'}
        <Send className="size-6" />
      </Button>
    </form>
  );
};

export default StartupForm;
