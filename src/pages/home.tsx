import { ScrollIcon } from "../components/ScrollIcon";

export const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <h1
          className="text-7xl text-center text-[var(--color-brand-white)]
                     border-r-5 border-[var(--color-brand-white)] whitespace-nowrap overflow-hidden
                     animate-[typing_2s_steps(30,end)_forwards,blink_0.8s_step-end_infinite_2s]"
        >
          Welcome to the CS Girlie Website
        </h1>

        <style>
          {`
            @keyframes typing {
              from { width: 0 }
              to { width: 28ch }
            }
            @keyframes blink {
              50% { border-color: transparent }
            }
          `}
        </style>
      </div>
      <ScrollIcon />
    </div>
  );
};
