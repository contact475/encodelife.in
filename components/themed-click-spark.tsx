'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ClickSpark from './click-spark';

interface ThemedClickSparkProps {
  children: React.ReactNode;
}

export function ThemedClickSpark({ children }: ThemedClickSparkProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const sparkColor = currentTheme === 'dark' ? '#ffffff' : '#000000';

  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
}
