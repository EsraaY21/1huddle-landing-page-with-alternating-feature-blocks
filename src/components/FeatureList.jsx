import React from "react";
import FeatureSection from "./FeatureSection";

export default function FeatureList() {
  const features = [
    {
      title: "Grow Together",
      paragraph:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ",
      sectionImage: "grow-together",
    },

    {
      title: "Flowing Conversations",
      paragraph:
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      sectionImage: "flowing-conversation",
    },
    {
      title: "Your Users",
      paragraph:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      sectionImage: "your-users",
    },
  ];

  return (
    <div className="features">
      {features.map((feature, index) => (
        <FeatureSection
          title={feature.title}
          key={index}
          desc={feature.paragraph}
          sectionImage={feature.sectionImage}
        />
      ))}
    </div>
  );
}
