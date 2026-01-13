'use client';

interface InputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export function Input({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  className = '',
}: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="text-sm text-text-muted mb-2 tracking-wide"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="bg-luxury-dark/50 border border-gold/20 px-4 py-3 text-white placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
      />
    </div>
  );
}

interface TextareaProps {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export function Textarea({
  label,
  name,
  rows = 4,
  placeholder,
  required = false,
  className = '',
}: TextareaProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="text-sm text-text-muted mb-2 tracking-wide"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="bg-luxury-dark/50 border border-gold/20 px-4 py-3 text-white placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 resize-none"
      />
    </div>
  );
}

interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}

export function Select({
  label,
  name,
  options,
  required = false,
  className = '',
}: SelectProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="text-sm text-text-muted mb-2 tracking-wide"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="bg-luxury-dark/50 border border-gold/20 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 cursor-pointer"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
