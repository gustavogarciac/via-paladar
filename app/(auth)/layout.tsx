import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-primary-50">
      {children}
    </div>
  );
};

export default AuthLayout;
