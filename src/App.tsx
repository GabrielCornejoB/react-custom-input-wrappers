import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from './FormInput';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters!' }),
  age: z
    .number({ invalid_type_error: 'Age Field is required!' })
    .min(18, { message: 'You must be 18 years or older!' }),
});
type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: FormData) => {
    alert('Form submitted, check the console for the data');
    console.log(data);
  };

  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center bg-slate-900'>
      <h1 className='mb-8 text-5xl font-bold text-white'>My Form</h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='flex w-96 flex-col gap-2 rounded-lg bg-slate-800 p-6'
      >
        <FormInput
          {...register('name')}
          type='text'
          placeholder='John Doe'
          labelText='Name'
          error={errors.name?.message}
        />
        <FormInput
          {...register('age', { valueAsNumber: true })}
          type='number'
          placeholder='33'
          labelText='Age'
          error={errors.age?.message}
        />
        <button
          type='submit'
          className='rounded-md bg-indigo-700 px-4 py-3 text-xl font-bold tracking-widest text-white transition-colors hover:bg-indigo-800'
        >
          SUBMIT
        </button>
      </form>
    </main>
  );
}

export default App;
