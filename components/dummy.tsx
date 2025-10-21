"use client";

import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Canadian Reach",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-blue-600 to-blue-600">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "DEI Leadership",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-600 to-blue-600">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Program Adjudication",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-600 to-blue-600">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "BIPOC Engagement",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-600 to-blue-600">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Mentorships",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-600 to-blue-600">
          
          <DummyContent />
        </div>
      ),
    },
     {
      title: "Speaking Engagements",
      value: "randoms",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-600 to-blue-600">
          
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-30">
        <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-medium lg:text-5xl">
          Our Journey of Empowering Canadian Communities
        </h2>
      </div>
      <div className="h-[16rem] sm:h-[20rem] md:h-[30rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-6 sm:my-8 md:my-10 mb-8 sm:mb-12 md:mb-16 lg:mb-50 px-4 sm:px-6 lg:px-8">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

const DummyContent = () => {
  return (
    <img
      src="items/talk.png"
      alt="Canadian communities and impact initiatives"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[95%] sm:h-[95%] md:h-[95%] lg:h-[95%] absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 inset-x-0 w-[85%] sm:w-[90%] rounded-xl mx-auto"
    />
  );
};
