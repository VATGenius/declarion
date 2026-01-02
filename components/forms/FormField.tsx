'use client';

import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  error?: string;
  className?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  options,
  error,
  className,
  value,
  onChange,
}: FormFieldProps) {
  const baseInputStyles =
    'w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20';

  const errorStyles = error ? 'border-red-500 focus:border-red-500' : '';

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {type === 'select' ? (
        <select
          id={name}
          name={name}
          required={required}
          className={cn(baseInputStyles, errorStyles)}
          value={value}
          onChange={onChange}
        >
          <option value="">Select an option</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={cn(baseInputStyles, errorStyles)}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          className={cn(baseInputStyles, errorStyles)}
          value={value}
          onChange={onChange}
        />
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
