import React from "react";

const UnderConstruction = () => {
  return (
    <section className="sm:px-10 px-5 lg:px-15  mt-20 md:mt-10">
      <div className="flex flex-col  p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl row-span-2 md:col-span-3 h-[10rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
        <p className="mt-2 mb-2 text-xl">Work Experience</p>
        <p className="mt-2 mb-2 text-xl">
          {"This section is being updated. In the meantime, you can view my "}
          <a href="/resume.pdf" className="text-blue-500 underline">
            résumé here.
          </a>
        </p>
      </div>
    </section>
  );
};

export default UnderConstruction;
