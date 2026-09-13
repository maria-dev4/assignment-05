
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
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

  return (
    <>
      <ToastContainer />

      <section className="container mx-auto px-4 py-12 md:py-16">


        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-gray-500">
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
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >

                  <div className="flex items-center justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />

                    <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                      {technology.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {technology.name}
                  </h3>

                 
                  <p className="mt-2 min-h-[58px] text-sm leading-5 text-gray-500">
                    {technology.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs">

                    <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
                      {technology.category}
                    </span>

                    <span className="text-gray-500">
                      {technology.difficulty}
                    </span>

                    <span className="font-medium text-gray-700">
                      ⭐ {technology.rating}
                    </span>

                  </div>

                  
                  <button
                    onClick={() => handleAddToStack(technology)}
                    disabled={isAdded}
                    className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white ${
                      isAdded
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Your Stack
              </h3>

              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                {stack.length} Selected
              </span>
            </div>

      
            {stack.length === 0 ? (
              <div className="py-10 text-center">

                <p className="text-sm text-gray-500">
                  No technologies selected yet.
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Add technologies from the list.
                </p>

              </div>
            ) : (
              <>
             
                <div className="mt-5 space-y-3">

                  {stack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                    >

                     
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-9 w-9 object-contain"
                      />

                     
                      <div className="min-w-0 flex-1">

                        <h4 className="truncate text-sm font-semibold text-gray-900">
                          {item.name}
                        </h4>

                        <p className="text-xs text-gray-500">
                          {item.category}
                        </p>

                      </div>

                      
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-xl font-bold text-gray-400 hover:text-red-500"
                      >
                        ×
                      </button>

                    </div>
                  ))}

                </div>

                <button
                  onClick={handleRemoveAll}
                  className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  Remove All
                </button>

              </>
            )}

          </aside>

        </div>
      </section>
    </>
  );
};

export default Technologies;
