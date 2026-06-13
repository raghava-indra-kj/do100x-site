import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

const button = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap select-none transition-[background,border-color,color] duration-150 cursor-pointer', {
  variants: {
    variant: {
      primary: 'bg-[var(--color-primary)] text-[var(--color-on-primary)] border-transparent active:bg-[var(--color-primary-active)] disabled:bg-[var(--color-primary-disabled)] disabled:text-[var(--text-muted)]',
      gradient: 'bg-[var(--gradient-brand)] text-[var(--color-on-primary)] border-transparent disabled:bg-[var(--color-primary-disabled)] disabled:text-[var(--text-muted)]',
      secondary: 'bg-[var(--surface-canvas)] text-[var(--text-ink)] border-[var(--border-hairline)] active:bg-[var(--surface-soft)]',
      ghost: 'bg-transparent text-[var(--text-ink)] border-transparent',
    },
    size: {
      sm: 'h-[34px] px-[14px] text-[13px] font-medium',
      md: 'h-[40px] px-[20px] text-[14px] font-medium',
      lg: 'h-[48px] px-[26px] text-[15px] font-medium',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(button({ variant, size }), className)}
      style={{ fontFamily: 'var(--font-sans)', borderRadius: 'var(--radius-md)', lineHeight: 1, letterSpacing: 0 }}
      {...props}
    />
  )
}

export { button }
