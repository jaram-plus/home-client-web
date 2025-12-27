main color: e50113 
we need dark mode and light mode

make color palette here
# Color Palette

## Primary Colors
```css
/* Main Brand Color */
--jaram-red: #e50113;
--jaram-red-light: #ff4757;
--jaram-red-dark: #c0392b;

/* Dark Mode */
--jaram-red-dark-mode: #ff6b7a;
```

## Light Theme
```css
:root {
  /* Primary */
  --primary: #e50113;
  --primary-foreground: #ffffff;
  
  /* Background */
  --background: #ffffff;
  --foreground: #0f172a;
  
  /* Secondary */
  --secondary: #f1f5f9;
  --secondary-foreground: #475569;
  
  /* Muted */
  --muted: #f8fafc;
  --muted-foreground: #64748b;
  
  /* Accent */
  --accent: #e2e8f0;
  --accent-foreground: #1e293b;
  
  /* Border */
  --border: #e2e8f0;
  --input: #e2e8f0;
  
  /* Card */
  --card: #ffffff;
  --card-foreground: #0f172a;
  
  /* Popover */
  --popover: #ffffff;
  --popover-foreground: #0f172a;
}
```

## Dark Theme
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Primary */
    --primary: #ff6b7a;
    --primary-foreground: #0f172a;
    
    /* Background */
    --background: #0f172a;
    --foreground: #f8fafc;
    
    /* Secondary */
    --secondary: #1e293b;
    --secondary-foreground: #cbd5e1;
    
    /* Muted */
    --muted: #1e293b;
    --muted-foreground: #94a3b8;
    
    /* Accent */
    --accent: #334155;
    --accent-foreground: #f8fafc;
    
    /* Border */
    --border: #334155;
    --input: #334155;
    
    /* Card */
    --card: #1e293b;
    --card-foreground: #f8fafc;
    
    /* Popover */
    --popover: #1e293b;
    --popover-foreground: #f8fafc;
  }
}
```

## Tailwind Config Colors
```javascript
// Add to tailwind.config.js
colors: {
  'jaram': {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#e50113', // Main brand color (JARAM Red)
    500: '#c0392b', // Darker shade for hover states
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  }
}
```
