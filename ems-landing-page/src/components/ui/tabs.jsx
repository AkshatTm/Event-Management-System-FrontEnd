// src/components/ui/tabs.js
import React, { useState } from 'react';

export function Tabs({ defaultValue, className, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  // Clone children and pass activeTab state
  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }
    return child;
  });
  
  return (
    <div className={`${className || ""}`}>
      {enhancedChildren}
    </div>
  );
}

export function TabsList({ className, children, activeTab, setActiveTab }) {
  // Clone TabsTrigger children to pass activeTab state
  const enhancedTriggers = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }
    return child;
  });
  
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className || ""}`}>
      {enhancedTriggers}
    </div>
  );
}

export function TabsTrigger({ value, className, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
        ${isActive ? "bg-background text-foreground shadow-sm" : "hover:bg-muted hover:text-current"} 
        ${className || ""}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children, activeTab }) {
  if (activeTab !== value) return null;
  
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className || ""}`}>
      {children}
    </div>
  );
}