import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import technologies from "../data/technologies.json";

type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const Technologies = () => {
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: number) => {
    const removedItem = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack!");
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-bg2">
        <p className="text-xl font-semibold text-heading">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />

      <section className="bg-bg2 py-12 md:py-16">
        <div className="container mx-auto px-4">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-heading md:text-4xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-text">
              Pick one technology per category to build your ideal stack.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

              {technologies.map((technology) => {
                const isAdded = stack.some(
                  (item) => item.id === technology.id
                );

                return (
                  <div
                    key={technology.id}
                    className="flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm"
                  >

                    <div className="flex items-center justify-between">

                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                      />

                      <span className="rounded-full bg-purple/20 px-3 py-1 text-xs font-medium text-purple3">
                        {technology.badge}
                      </span>

                    </div>

                    <h3 className="mt-4 text-lg font-bold text-heading">
                      {technology.name}
                    </h3>

                    <p className="mt-2 min-h-[58px] text-sm leading-5 text-text">
                      {technology.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs">

                      <span className="rounded bg-card3 px-2 py-1 text-blue3">
                        {technology.category}
                      </span>

                      <span className="text-muted">
                        {technology.difficulty}
                      </span>

                      <span className="font-medium text-heading2">
                        ⭐ {technology.rating}
                      </span>

                    </div>

                    <button
                      onClick={() => handleAddToStack(technology)}
                      disabled={isAdded}
                      className={`mt-auto w-full rounded-lg py-2.5 text-sm font-medium text-white ${
                        isAdded
                          ? "cursor-not-allowed bg-muted2"
                          : "bg-gradient-to-r from-purple to-pink hover:opacity-90"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>

                  </div>
                );
              })}

            </div>

            <aside className="h-fit rounded-xl border border-border bg-card p-5 shadow-sm">

              <h3 className="text-xl font-bold text-heading">
                Your Stack
              </h3>

              <span className="mt-1 inline-block text-xs text-muted">
                {stack.length} Selected
              </span>

              {stack.length === 0 ? (
                <div className="mt-4 rounded-xl border border-dashed border-border2 px-4 py-7 text-center">

                  <p className="text-sm text-muted">
                    Your stack is empty.
                  </p>

                </div>
              ) : (
                <>

                  <div className="mt-5 space-y-3">

                    {stack.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-lg border border-border bg-card2 p-3"
                      >

                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-9 w-9 object-contain"
                        />

                        <div className="min-w-0 flex-1">

                          <h4 className="truncate text-sm font-semibold text-heading">
                            {item.name}
                          </h4>

                          <p className="text-xs text-muted">
                            {item.category}
                          </p>

                        </div>

                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-xl font-bold text-muted hover:text-red"
                        >
                          ×
                        </button>

                      </div>
                    ))}

                  </div>

                  <button
                    onClick={handleRemoveAll}
                    className="mt-5 w-full rounded-lg border border-red/50 py-2.5 text-sm font-medium text-red hover:bg-red/10"
                  >
                    Remove All
                  </button>

                </>
              )}

            </aside>

          </div>

        </div>
      </section>
    </>
  );
};

export default Technologies;