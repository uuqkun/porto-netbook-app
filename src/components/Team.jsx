import React from "react";
import { members } from "../constant";
import { font, layout } from "../styles";
import { SubHeader, Button } from "../components";


const openTab = (e, id) => {
  let tabs = Array.from(document.getElementsByClassName("tabs"));
  let tabLinks = Array.from(document.getElementsByClassName("tablink"));

  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  tabLinks.forEach((tabLink) => {
    tabLink.className = tabLink.className.replace("bg-primary", "");
    tabLink.className = tabLink.className.replace("shadow-button", "");
    tabLink.className = tabLink.className.replace("text-white", "");
  });

  document.getElementById(id).style.display = "flex";
  e.currentTarget.className += " bg-primary text-white shadow-button ";
};

const Team = () => {
  return (
    <section className={`${layout.flexCenter} flex-col mb-20`}>
      {/* title */}
      <div className="my-10">
        <div className={`flex-1 ${layout.flexCenter} flex-col md:mb-0 mb-5`}>
          <div className="px-5 py-2 bg-dimBlue rounded-lg mb-4">
            <SubHeader value={"Valuable Team"} />
          </div>

          <h1
            className={`${font.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4 text-center`}
          >
            Our Active Members
          </h1>

          <p
            className={`${font.paragraph} text-paragraph max-w-[370px] font-quicksand leading-7 text-center`}
          >
            when an unknown printer took a galley of type and meeting fari
            scrambled it.
          </p>
        </div>
      </div>

      {/* nav tabs */}
      <div className={`mb-10 bg-dimBlue rounded-2xl p-3`}>
        <Button
          value="New"
          classes="tablink link-item bg-primary text-white shadow-button"
          event={(e) => openTab(e, "new")}
        />
        <Button
          value="Popular"
          classes="tablink link-item text-heading"
          event={(e) => openTab(e, "popular")}
        />
        <Button
          value="Active"
          classes="tablink link-item text-heading "
          event={(e) => openTab(e, "active")}
        />
      </div>

      {/* members */}
      <div className="flex">
        <div
          id="new"
          className="member-tab tabs flex flex-wrap items-center justify-center gap-10"
        >
          {members.new.map((member, i) => (
            <div
              key={member.id}
              className={`${
                i !== 0 ? "border-gray-100 border-[1px]" : "shadow-card"
              } rounded-xl px-[50px] py-[30px] `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="md:w-[166px] w-[128px] md:h-[171px] h-[132px] mb-7 "
              />
              <h2
                className={`font-quicksand text-center text-heading ${font.heading3} mb-3`}
              >
                {member.name}
              </h2>
              <p className={`font-quicksand text-center ${font.paragraph}`}>
                {member.insta}
              </p>
            </div>
          ))}
        </div>

        <div
          id="popular"
          className="member-tab tabs hidden flex-wrap items-center justify-center gap-10"
        >
          {members.popular.map((member, i) => (
            <div
              key={member.id}
              className={`${
                i !== 0 ? "border-gray-100 border-[1px]" : "shadow-card"
              } rounded-xl px-[50px] py-[30px] `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="md:w-[166px] w-[128px] md:h-[171px] h-[132px] mb-7 "
              />
              <h2
                className={`font-quicksand text-center text-heading ${font.heading3} mb-3`}
              >
                {member.name}
              </h2>
              <p className={`font-quicksand text-center ${font.paragraph}`}>
                {member.insta}
              </p>
            </div>
          ))}
        </div>

        <div
          id="active"
          className="member-tab tabs hidden flex-wrap items-center justify-center gap-10"
        >
          {members.active.map((member, i) => (
            <div
              key={member.id}
              className={`${
                i !== 0 ? "border-gray-100 border-[1px]" : "shadow-card"
              } rounded-xl px-[50px] py-[30px] `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="md:w-[166px] w-[128px] md:h-[171px] h-[132px] mb-7 "
              />
              <h2
                className={`font-quicksand text-center text-heading ${font.heading3} mb-3`}
              >
                {member.name}
              </h2>
              <p className={`font-quicksand text-center ${font.paragraph}`}>
                {member.insta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
