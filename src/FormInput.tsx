import { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error?: string;
  name: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  function FormInput(props, ref) {
    const { labelText, error, name, ...rest } = props;

    return (
      <div className='flex flex-col'>
        <label htmlFor={name} className='text-slate-400'>
          {labelText}
        </label>

        <input
          ref={ref}
          {...rest}
          name={name}
          title={`${name} input`}
          className='rounded-md bg-slate-700 px-4 py-3 text-xl text-white'
        />

        <p className='h-6 text-red-600'>{error}</p>
      </div>
    );
  }
);

export default FormInput;
