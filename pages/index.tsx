import React from "react";
import { Button } from "@/components/ui/button";

const Container = (
  { children, left, ...props }: React.HTMLAttributes<HTMLDivElement> & {
    left: React.ReactNode;
  },
) => {
  return (
    <div
      className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-md"
      {...props}
    >
      <div className="flex gap-4">
        <div className="w-[20%] hover:scale-[2] transition-transform duration-300 ease-in-out cursor-pointer">
          {left}
        </div>
        <div className="flex-1 bg-primary">{children}</div>
      </div>
      <Button variant="default">
        fuck
      </Button>
    </div>
  );
};

export default function MyPage() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    console.log("index.tsx");
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <Container left={<div>Left Content</div>}>
      <h1>Hello, World!</h1>
      <p>Current time: {currentTime.toLocaleTimeString()}</p>
    </Container>
  );
}
