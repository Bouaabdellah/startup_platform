'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import MDEditor from '@uiw/react-md-editor';
import { Send } from 'lucide-react';

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState<string>('');
//   const [state, formAction, isPending] = useActionState(handleFormSubmit, {});
  
//   const handleFormSubmit = async (prevState : any, form : FormData) => {

//   }
   const isPending = false;

  return (
    <form action="" className="startup-form">
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

      <Button className="startup-form_btn" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit Your Pitch'}
        <Send className="size-6"/>
      </Button>
    </form>
  );
};

export default StartupForm;
