import Image from "next/image";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import SwitchSection from "../../components/switchSections/SwitchSection";
import CardContainer from "../../components/card/CardContainer";
import CardInnerContainer from "../../components/card/CardInnerContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <Sidebar />
      <section className="flex flex-col pl-3 pr-4 ">
        <Header />
        <SwitchSection />
        {/* Cards */}
        <section className="flex flex-row ">
          <CardContainer
            outerContainerWidth={"w-607"}
            outerContainerHeight={"h-348"}
            badgeicon={"/icons/whiteMediumIcon.png"}
            containerColor={"bg-news-background"}
            badgeText={"Articles"}
            firstArrowIcon={"/icons/arrowLeftIcon.png"}
            secondArrowIcon={"/icons/arrowRightIcon.png"}
          >
            <CardInnerContainer
              areaContainerHeight={"h-186"}
              areaContainerWidth={"w-272"}
              avatarSectionjustify={"justify-between"}
              innerContainerDirection={"flex-col"}
              innerContainerHeight={"h-316"}
              innerContainerWidth={"w-272"}
            />
          </CardContainer>
        </section>
      </section>
    </main>
  );
}
