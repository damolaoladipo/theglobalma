"use client";

import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Our Reach",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "DEI Leadership",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Program Adjudication",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "BIPOC Engagement",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Mentorships",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
     {
      title: "Speakings",
      value: "randoms",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="max-w-5xl pl-50 mt-30">
        <h2 className="text-balance text-4xl font-medium lg:text-5xl">
          Our Journey of Empowering Communities Worldwide
        </h2>

      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10 mb-40">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

const DummyContent = () => {
  return (
    <img
      src="/blocks/imgg.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
