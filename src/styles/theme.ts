/** Modern Enterprise Design System — Color tokens & typography */

export interface ThemeTokens {
  /** Background & surface hierarchy */
  background: string;
  surface: string;
  surfaceHover: string;
  /** Brand colors */
  primary: string;
  primaryHover: string;
  secondary: string;
  /** Text hierarchy */
  text: string;
  textSecondary: string;
  muted: string;
  /** Semantic states */
  success: string;
  error: string;
  /** Elevation & border */
  border: string;
  shadow: string;
  shadowLg: string;
}

export const darkTheme: ThemeTokens = {
  background: '#0F172A',
  surface: '#1E293B',
  surfaceHover: '#273548',
  primary: '#3B82F6',
  primaryHover: '#2563EB',
  secondary: '#8B5CF6',
  text: '#F1F5F9',
  textSecondary: '#CBD5E1',
  muted: '#64748B',
  success: '#22C55E',
  error: '#EF4444',
  border: '#334155',
  shadow: '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)',
  shadowLg: '0 10px 25px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(0, 0, 0, 0.3)',
};

export const lightTheme: ThemeTokens = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceHover: '#F1F5F9',
  primary: '#2563EB',
  primaryHover: '#1D4ED8',
  secondary: '#7C3AED',
  text: '#0F172A',
  textSecondary: '#475569',
  muted: '#94A3B8',
  success: '#16A34A',
  error: '#DC2626',
  border: '#E2E8F0',
  shadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
  shadowLg: '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)',
};
